var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette", "../Apps/Services/NotificationService/NotificationService", "../Apps/Services/RadioService/RadioPageService", "../Apps/Services/PageRouterService/PageRouterFactory"], function (require, exports, Marionette, refNotificationSvc, refRadioPageSvc, refPageRouterFac) {
    "use strict";
    var SwebBootstrap = (function (_super) {
        __extends(SwebBootstrap, _super);
        function SwebBootstrap() {
            _super.call(this);
            this.on("start", this.started);
        }
        SwebBootstrap.prototype.started = function () {
            this.setupRegions();
            this.setupRouters();
            this.setupNotificationService();
            this.setupPageRouter();
            refRadioPageSvc.RadioPageService.showLandingPage();
        };
        ;
        SwebBootstrap.prototype.setupRegions = function () {
            this.addRegions({ baseRegion: '#base-region' });
        };
        SwebBootstrap.prototype.setupNotificationService = function () {
            var svc = new refNotificationSvc.NotificationService();
        };
        SwebBootstrap.prototype.setupPageRouter = function () {
            if (this.pageRouterService !== undefined) {
                this.pageRouterService.destroy();
            }
            var baseRegion = this.getRegion("baseRegion");
            this.pageRouterService = refPageRouterFac.PageRouterFactory.getRouter(baseRegion);
        };
        SwebBootstrap.prototype.setupRouters = function () {
            if (Backbone.history) {
                Backbone.history.start();
            }
        };
        return SwebBootstrap;
    }(Marionette.Application));
    exports.SwebBootstrap = SwebBootstrap;
});
//# sourceMappingURL=SwebBootstrap.js.map