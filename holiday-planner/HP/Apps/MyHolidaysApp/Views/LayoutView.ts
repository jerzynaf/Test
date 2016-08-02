import refBaseView = require("../../BaseMarionette/BaseLayoutView");
import refRadio = require("backbone.radio");
import refHolidayRequestsView = require("../Views/HolidayRequestsView");
import refBackboneModel = require("../../BaseBackbone/BaseModel");
import refRadioService = require("../../Services/RadioService/RadioPageService");
import refFooter = require("../Views/FooterView");

export class LayoutView extends refBaseView.BaseLayoutView<Backbone.Model> {

    //private panelView: refPanelView.PanelView;
    //private panelModel: refPanelModel.UserListCollectionModel;
    private holidayRequestsView: refHolidayRequestsView.HolidayRequestsView;
    //private userModel: refUserModel.UserModel;
    private radioChannel: Backbone.Radio.Channel;
    private footerView: refFooter.FooterView;

    constructor(options?: any) {
        if (!options) options = {};
        options.template = super.loadTemplate("MyHolidaysApp/layout");
        super(options);
    }

    onViewShown() {
        this.setupRegions();
        this.showPanelView();
        this.showFooterView();
        this.showMyVacations();
        this.setupHandlers();
    }

    private setupRegions() {
        this.addRegions({ regionPanel: ".region-panel" });
        this.addRegions({ regionDetail: ".region-detail" });
        this.addRegions({ regionFooter: ".region-footer" });
    }

    private showPanelView() {
        console.log("Displaying a summary panel is not implemented yet");
        //this.panelModel = new refPanelModel.UserListCollectionModel();

        //this.panelModel.fetch().done(() => {
        //    var region = this.getRegion("regionPanel");
        //    this.panelView = new refPanelView.PanelView({ collection: this.panelModel });
        //    this.listenTo(this.panelView, "childview:user-selected", this.onSelectedUser);
        //    this.listenTo(this.panelView, "add-user", this.onCreateUser);
        //    region.show(this.panelView);
        //});
    }

    private showMyVacations() {
        var backboneModel = new refBackboneModel.BaseModel();
        this.holidayRequestsView = new refHolidayRequestsView.HolidayRequestsView({ model: backboneModel });

        var region = this.getRegion("regionDetail");
        region.show(this.holidayRequestsView);
    }

    private showFooterView() {
        this.footerView = new refFooter.FooterView();
        var region = this.getRegion("regionFooter");
        region.show(this.footerView);
    }

    //private onSelectedUser(memberModel) {

    //    this.userDetailsView = new refUserDetailsView.UserDetailsView();
    //    var guid = memberModel.model.attributes.MemberId;
    //    this.userModel = new refUserModel.UserModel(guid);
    //    //this.userModel.set('MemberId', guid);

    //    this.userModel.fetch().done(() => {
    //        var region = this.getRegion("regionDetail");
    //        this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: this.userModel });
    //        region.show(this.userDetailsView);
    //    });
    //};

    private onCreateUser() {

    };

    setupHandlers() {
        this.radioChannel = refRadio.channel(refRadioService.RadioPageService.myHolidays.name);
        //this.listenTo(this.radioChannel,
        //    refRadioService.RadioPageService.maintainUsers.actions.saveUserDetails,
        //    () => this.onSaveUserDetails());
    }


    //showUserDetail(number: string) {
    //    this.userDetailsView = new refUserDetailsView.UserDetailsView();
    //    var guid = number;
    //    this.userModel = new refUserModel.UserModel(guid);

    //    this.userModel.fetch().done(() => {
    //        var region = this.getRegion("regionDetail");
    //        this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: this.userModel });
    //        region.show(this.userDetailsView);
    //    });

    //}
}