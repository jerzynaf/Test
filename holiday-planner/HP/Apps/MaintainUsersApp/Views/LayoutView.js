var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseLayoutView", "../Models/UserListCollectionModel", "../Views/PanelView", "../Views/UserDetailsView", "../Models/UserModel", "../../Services/RadioService/RadioNotificationService", "../Views/FooterView"], function (require, exports, refBaseView, refPanelModel, refPanelView, refUserDetailsView, refUserModel, refRadioNotificationService, refFooter) {
    "use strict";
    var LayoutView = (function (_super) {
        __extends(LayoutView, _super);
        function LayoutView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MaintainUsersApp/layout");
            _super.call(this, options);
        }
        LayoutView.prototype.onViewShown = function () {
            this.setupRegions();
            this.showPanelView();
            this.showFooterView();
            this.setupHandlers();
        };
        LayoutView.prototype.setupRegions = function () {
            this.addRegions({ regionPanel: ".region-panel" });
            this.addRegions({ regionDetail: ".region-detail" });
            this.addRegions({ regionFooter: ".region-footer" });
        };
        LayoutView.prototype.showPanelView = function () {
            var _this = this;
            this.panelModel = new refPanelModel.UserListCollectionModel();
            this.panelModel.fetch().done(function () {
                var region = _this.getRegion("regionPanel");
                _this.panelView = new refPanelView.PanelView({ collection: _this.panelModel });
                _this.listenTo(_this.panelView, "childview:user-selected", _this.onSelectedUser);
                _this.listenTo(_this.panelView, "add-user", _this.onCreateUser);
                region.show(_this.panelView);
            });
        };
        LayoutView.prototype.showFooterView = function () {
            this.footerView = new refFooter.FooterView();
            var region = this.getRegion("regionFooter");
            region.show(this.footerView);
        };
        LayoutView.prototype.onSelectedUser = function (memberModel) {
            var _this = this;
            this.userDetailsView = new refUserDetailsView.UserDetailsView();
            var guid = memberModel.model.attributes.MemberId;
            this.userModel = new refUserModel.UserModel(guid);
            //this.userModel.set('MemberId', guid);
            this.userModel.fetch().done(function () {
                var region = _this.getRegion("regionDetail");
                _this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: _this.userModel });
                region.show(_this.userDetailsView);
            });
        };
        ;
        LayoutView.prototype.onCreateUser = function () {
        };
        ;
        LayoutView.prototype.setupHandlers = function () {
            /*
            this.radioChannel = refRadio.channel(refRadioService.RadioPageService.maintainUsers.name);
            this.listenTo(this.radioChannel,
                refRadioService.RadioPageService.maintainUsers.actions.saveUserDetails,
                () => this.onSaveUserDetails());
            this.listenTo(this.radioChannel,
                refRadioService.RadioPageService.maintainUsers.actions.createNewUser,
                () => this.onCreateNewUser());
            */
        };
        LayoutView.prototype.onSaveUserDetails = function () {
            if (this.userDetailsView.validateScreen()) {
                this.saveRecord(false);
                return;
            }
            refRadioNotificationService.RadioNotificationService.notifyWarning("Maintain Users", "Please correct validation errors");
        };
        LayoutView.prototype.onCreateNewUser = function () {
            this.showUserDetail('00000000-0000-0000-0000-000000000000');
        };
        LayoutView.prototype.saveRecord = function (showDispositionOnSave) {
            var data = Backbone.Syphon.serialize(this.userDetailsView);
            this.userModel.set(data);
            var self = this;
            if (this.userModel.save(null, {
                validate: false,
                success: function (model, response) {
                    self.userDetailsView.clearValidationErrors();
                    //self.loadFullLead(() => { });
                    refRadioNotificationService.RadioNotificationService.notifySuccess("Maintain Users", "User Saved");
                    self.panelView.refresh();
                },
                error: function (model, response) {
                    if (response.status === 400) {
                    }
                    self.userDetailsView.showValidationErrors();
                    refRadioNotificationService.RadioNotificationService.notifyError("Maintain Users", "Can not save at this time<br>." + response.statusText + " (" + response.status + ")");
                }
            }) === false) {
                refRadioNotificationService.RadioNotificationService.notifyWarning("Maintain Users", "Please correct validation errors");
            }
        };
        LayoutView.prototype.showUserDetail = function (number) {
            var _this = this;
            this.userDetailsView = new refUserDetailsView.UserDetailsView();
            var guid = number;
            this.userModel = new refUserModel.UserModel(guid);
            this.userModel.fetch().done(function () {
                var region = _this.getRegion("regionDetail");
                _this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: _this.userModel });
                region.show(_this.userDetailsView);
            });
        };
        return LayoutView;
    }(refBaseView.BaseLayoutView));
    exports.LayoutView = LayoutView;
});
//# sourceMappingURL=LayoutView.js.map