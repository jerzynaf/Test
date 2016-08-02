var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette", "../Apps/Services/NotificationService/NotificationService", "../Apps/Services/RadioService/RadioPageService", "../Apps/Services/PageRouterService/PageRouterFactory"], function (require, exports, Marionette, refNotificationSvc, refRadioPageSvc, refPageRouterFac) {
    "use strict";
    var CvlBootstrap = (function (_super) {
        __extends(CvlBootstrap, _super);
        function CvlBootstrap() {
            _super.call(this);
            this.on("start", this.started);
        }
        CvlBootstrap.prototype.started = function () {
            this.setupRegions();
            this.setupRouters();
            this.setupNotificationService();
            this.setupPageRouter();
            refRadioPageSvc.RadioPageService.showLandingPage();
        };
        ;
        CvlBootstrap.prototype.setupRegions = function () {
            this.addRegions({ baseRegion: '#base-region' });
        };
        CvlBootstrap.prototype.setupNotificationService = function () {
            var svc = new refNotificationSvc.NotificationService();
        };
        CvlBootstrap.prototype.setupPageRouter = function () {
            if (this.pageRouterService !== undefined) {
                this.pageRouterService.destroy();
            }
            var baseRegion = this.getRegion("baseRegion");
            this.pageRouterService = refPageRouterFac.PageRouterFactory.getRouter(baseRegion);
        };
        CvlBootstrap.prototype.setupRouters = function () {
            if (Backbone.history) {
                Backbone.history.start();
            }
        };
        return CvlBootstrap;
    }(Marionette.Application));
    exports.CvlBootstrap = CvlBootstrap;
});
