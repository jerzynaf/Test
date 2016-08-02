var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView", "../../../Components/LoginComponent/Mediator/Mediator", "../../../Components/AppHeader/Mediator/Mediator"], function (require, exports, refBaseView, refLoginComponent, refHeader) {
    "use strict";
    var LayoutView = (function (_super) {
        __extends(LayoutView, _super);
        function LayoutView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Pages/Landing/Layout");
            _super.call(this, options);
        }
        LayoutView.prototype.onViewShown = function () {
            console.log("layout shown");
            this.setupRegions();
            this.showLoginComponent();
            this.displayHeader();
        };
        LayoutView.prototype.displayHeader = function () {
            var region = this.getRegion("headerRegion");
            var menuApp = new refHeader.Mediator(region);
        };
        LayoutView.prototype.setupRegions = function () {
            this.addRegions({ loginRegion: ".login-region" });
            this.addRegions({ headerRegion: ".header-region" });
        };
        LayoutView.prototype.showLoginComponent = function () {
            var region = this.getRegion("loginRegion");
            var loginComponent = new refLoginComponent.Mediator(region);
        };
        return LayoutView;
    }(refBaseView.BaseLayoutView));
    exports.LayoutView = LayoutView;
});
//# sourceMappingURL=LayoutView.js.map