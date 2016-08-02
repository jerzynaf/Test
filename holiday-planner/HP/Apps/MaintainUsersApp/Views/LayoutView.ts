import refBaseView = require("../../BaseMarionette/BaseLayoutView");
import refRadio = require("backbone.radio");
import refPanelModel = require("../Models/UserListCollectionModel");
import refPanelView = require("../Views/PanelView");
import refUserDetailsView = require("../Views/UserDetailsView");
import refUserModel = require("../Models/UserModel");
import refRadioService = require("../../Services/RadioService/RadioPageService");
import refRadioNotificationService = require("../../Services/RadioService/RadioNotificationService");
import refFooter = require("../Views/FooterView");

export class LayoutView extends refBaseView.BaseLayoutView<Backbone.Model> {

    private browseChannel: Backbone.Radio.Channel;
    private panelView: refPanelView.PanelView;
    private panelModel: refPanelModel.UserListCollectionModel;
    private userDetailsView: refUserDetailsView.UserDetailsView;
    private userModel: refUserModel.UserModel;
    private radioChannel: Backbone.Radio.Channel;
    private footerView: refFooter.FooterView;

    constructor(options?: any) {
        if (!options) options = {};
        options.template = super.loadTemplate("MaintainUsersApp/layout");
        super(options);
    }

    onViewShown() {
        this.setupRegions();
        this.showPanelView();
        this.showFooterView();
        this.setupHandlers();
    }

    private setupRegions() {
        this.addRegions({ regionPanel: ".region-panel" });
        this.addRegions({ regionDetail: ".region-detail" });
        this.addRegions({ regionFooter: ".region-footer" });
    }

    private showPanelView() {
        this.panelModel = new refPanelModel.UserListCollectionModel();

        this.panelModel.fetch().done(() => {
            var region = this.getRegion("regionPanel");
            this.panelView = new refPanelView.PanelView({ collection: this.panelModel });
            this.listenTo(this.panelView, "childview:user-selected", this.onSelectedUser);
            this.listenTo(this.panelView, "add-user", this.onCreateUser);
            region.show(this.panelView);
        });
    }

    private showFooterView() {
        this.footerView = new refFooter.FooterView();
        var region = this.getRegion("regionFooter");
        region.show(this.footerView);
    }

    private onSelectedUser(memberModel) {

        this.userDetailsView = new refUserDetailsView.UserDetailsView();
        var guid = memberModel.model.attributes.MemberId;
        this.userModel = new refUserModel.UserModel(guid);
        //this.userModel.set('MemberId', guid);

        this.userModel.fetch().done(() => {
            var region = this.getRegion("regionDetail");
            this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: this.userModel });
            region.show(this.userDetailsView);
        });
    };

    private onCreateUser() {

    };

    setupHandlers() {
        /*
        this.radioChannel = refRadio.channel(refRadioService.RadioPageService.maintainUsers.name);
        this.listenTo(this.radioChannel,
            refRadioService.RadioPageService.maintainUsers.actions.saveUserDetails,
            () => this.onSaveUserDetails());
        this.listenTo(this.radioChannel,
            refRadioService.RadioPageService.maintainUsers.actions.createNewUser,
            () => this.onCreateNewUser());
        */
    }

    private onSaveUserDetails() {

        if (this.userDetailsView.validateScreen()) {
            this.saveRecord(false);
            return;
        }
        refRadioNotificationService.RadioNotificationService.notifyWarning("Maintain Users", "Please correct validation errors");
    }

    private onCreateNewUser() {
        this.showUserDetail('00000000-0000-0000-0000-000000000000');
    }




    private saveRecord(showDispositionOnSave: boolean) {

        var data = Backbone.Syphon.serialize(this.userDetailsView);


        this.userModel.set(data);

        var self = this;
        if (this.userModel.save(null, {
            validate: false,

            success(model, response) {

                self.userDetailsView.clearValidationErrors();

                //self.loadFullLead(() => { });

                refRadioNotificationService.RadioNotificationService.notifySuccess("Maintain Users", "User Saved");
                self.panelView.refresh();

            },
            error(model, response) {
                if (response.status === 400) {
                    //for (var key in response.responseJSON) {
                    //console.log("field:" + key + " message:" + response.responseJSON[key]);
                    //}
                }
                self.userDetailsView.showValidationErrors();
                refRadioNotificationService.RadioNotificationService.notifyError("Maintain Users", "Can not save at this time<br>." + response.statusText + " (" + response.status + ")");
            }
        }) === false) {
            refRadioNotificationService.RadioNotificationService.notifyWarning("Maintain Users", "Please correct validation errors");
        }
    }

    showUserDetail(number: string) {
        this.userDetailsView = new refUserDetailsView.UserDetailsView();
        var guid = number;
        this.userModel = new refUserModel.UserModel(guid);

        this.userModel.fetch().done(() => {
            var region = this.getRegion("regionDetail");
            this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: this.userModel });
            region.show(this.userDetailsView);
        });

    }
}