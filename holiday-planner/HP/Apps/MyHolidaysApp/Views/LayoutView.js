var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseLayoutView", "backbone.radio", "../Views/HolidayRequestsView", "../../BaseBackbone/BaseModel", "../../Services/RadioService/RadioPageService", "../Views/FooterView"], function (require, exports, refBaseView, refRadio, refHolidayRequestsView, refBackboneModel, refRadioService, refFooter) {
    "use strict";
    var LayoutView = (function (_super) {
        __extends(LayoutView, _super);
        function LayoutView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MyHolidaysApp/layout");
            _super.call(this, options);
        }
        LayoutView.prototype.onViewShown = function () {
            this.setupRegions();
            this.showPanelView();
            this.showFooterView();
            this.showMyVacations();
            this.setupHandlers();
        };
        LayoutView.prototype.setupRegions = function () {
            this.addRegions({ regionPanel: ".region-panel" });
            this.addRegions({ regionDetail: ".region-detail" });
            this.addRegions({ regionFooter: ".region-footer" });
        };
        LayoutView.prototype.showPanelView = function () {
            console.log("Displaying a summary panel is not implemented yet");
            //this.panelModel = new refPanelModel.UserListCollectionModel();
            //this.panelModel.fetch().done(() => {
            //    var region = this.getRegion("regionPanel");
            //    this.panelView = new refPanelView.PanelView({ collection: this.panelModel });
            //    this.listenTo(this.panelView, "childview:user-selected", this.onSelectedUser);
            //    this.listenTo(this.panelView, "add-user", this.onCreateUser);
            //    region.show(this.panelView);
            //});
        };
        LayoutView.prototype.showMyVacations = function () {
            var backboneModel = new refBackboneModel.BaseModel();
            this.holidayRequestsView = new refHolidayRequestsView.HolidayRequestsView({ model: backboneModel });
            var region = this.getRegion("regionDetail");
            region.show(this.holidayRequestsView);
        };
        LayoutView.prototype.showFooterView = function () {
            this.footerView = new refFooter.FooterView();
            var region = this.getRegion("regionFooter");
            region.show(this.footerView);
        };
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
        LayoutView.prototype.onCreateUser = function () {
        };
        ;
        LayoutView.prototype.setupHandlers = function () {
            this.radioChannel = refRadio.channel(refRadioService.RadioPageService.myHolidays.name);
            //this.listenTo(this.radioChannel,
            //    refRadioService.RadioPageService.maintainUsers.actions.saveUserDetails,
            //    () => this.onSaveUserDetails());
        };
        return LayoutView;
    }(refBaseView.BaseLayoutView));
    exports.LayoutView = LayoutView;
});
//# sourceMappingURL=LayoutView.js.map