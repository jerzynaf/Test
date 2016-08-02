/// <reference path="../../../../typings/backbone/backbone.d.ts" />
/// <reference path="../../../../typings/marionette/marionette.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView", "../../../Components/HeaderToolbar/Mediator/Mediator"], function (require, exports, refBaseView, refHeaderToolbar) {
    "use strict";
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/AppHeader/Header");
            _super.call(this, options);
        }
        HeaderView.prototype.onViewShown = function () {
            this.setupRegions();
            this.displayToolbar();
        };
        HeaderView.prototype.displayToolbar = function () {
            var region = this.getRegion("toolbar");
            var menuApp = new refHeaderToolbar.Mediator(region);
        };
        HeaderView.prototype.setupRegions = function () {
            this.addRegions({ toolbar: ".toolbar" });
        };
        return HeaderView;
    }(refBaseView.BaseLayoutView));
    exports.HeaderView = HeaderView;
});
//# sourceMappingURL=HeaderView.js.map