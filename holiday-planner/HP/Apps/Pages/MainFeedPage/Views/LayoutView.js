var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView", "../../../Components/AppHeader/Mediator/Mediator", "../../../Components/AppFooter/Mediator/Mediator", "backbone.radio", "../../../Services/RadioService/RadioPageService", "../../../MyHolidaysApp/Mediator/Mediator"], function (require, exports, refBaseView, refHeader, refFooter, refRadio, refRadioPageService, refMyHolidays) {
    "use strict";
    var LayoutView = (function (_super) {
        __extends(LayoutView, _super);
        function LayoutView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Pages/MainFeed/Layout");
            _super.call(this, options);
        }
        LayoutView.prototype.setupMessageHandlers = function () {
            var _this = this;
            this.myPageChannel = refRadio.channel(refRadioPageService.RadioPageService.radioDefinition.name);
            this.listenTo(this.myPageChannel, refRadioPageService.RadioPageService.radioDefinition.actions.showMyHolidays, function () { return _this.showMyHolidaysPage(); });
        };
        LayoutView.prototype.onViewShown = function () {
            this.setupRegions();
            this.displayHeader();
            //this.displayFooter();
            this.showMyHolidaysPage();
            this.setupMessageHandlers();
        };
        LayoutView.prototype.displayFooter = function () {
            var region = this.getRegion("footerRegion");
            var menuApp = new refFooter.Mediator(region);
        };
        LayoutView.prototype.displayHeader = function () {
            var region = this.getRegion("headerRegion");
            var menuApp = new refHeader.Mediator(region);
        };
        LayoutView.prototype.setupRegions = function () {
            this.addRegions({ headerRegion: ".header-region" });
            this.addRegions({ feedRegion: ".feed-region" });
            //this.addRegions({ footerRegion: ".footer-region" });
        };
        LayoutView.prototype.showMyHolidaysPage = function () {
            var region = this.getRegion("feedRegion");
            var myHolidaysApp = new refMyHolidays.Mediator(region);
        };
        return LayoutView;
    }(refBaseView.BaseLayoutView));
    exports.LayoutView = LayoutView;
});
//# sourceMappingURL=LayoutView.js.map