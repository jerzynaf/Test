var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.radio", "../RadioService/RadioPageService", "../../Pages/LandingPage/Mediator/Mediator", "../../Pages/MainFeedPage/Mediator/Mediator"], function (require, exports, refRadio, refRadioPageSvc, refLandingPage, refMainFeedPage) {
    "use strict";
    var BasePageRouterService = (function (_super) {
        __extends(BasePageRouterService, _super);
        function BasePageRouterService(region) {
            _super.call(this);
            this.baseRegion = region;
            this.setupMessageHandlers();
            console.log("****** create a page router");
        }
        BasePageRouterService.prototype.onDestroy = function () {
            console.log("****  router being destroyed");
            this.stopListening();
        };
        BasePageRouterService.prototype.setupMessageHandlers = function () {
            var _this = this;
            this.myChannel = refRadio.channel(refRadioPageSvc.RadioPageService.radioDefinition.name);
            this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showLandingPage, function () { return _this.showLandingPage(); });
            this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showMainFeedPage, function () { return _this.showMainFeedPage(); });
            //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFeed, () => this.showFeed());
            //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showBrowseMembers, () => this.showBrowseMembers());
            //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFriends, () => this.showFriends());
            //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFollowers, () => this.showFollowers());
            //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showPhotos, () => this.showPhotos());
        };
        BasePageRouterService.prototype.showLandingPage = function () {
            var mediator = new refLandingPage.Mediator(this.baseRegion);
        };
        BasePageRouterService.prototype.showMainFeedPage = function () {
            var mediator = new refMainFeedPage.Mediator(this.baseRegion);
        };
        BasePageRouterService.prototype.showFeed = function () {
            console.log("show feed");
        };
        BasePageRouterService.prototype.showBrowseMembers = function () {
            console.log("show members");
        };
        BasePageRouterService.prototype.showFriends = function () {
            console.log("show friends");
        };
        BasePageRouterService.prototype.showFollowers = function () {
            console.log("show followers");
        };
        BasePageRouterService.prototype.showPhotos = function () {
            console.log("show photos");
        };
        return BasePageRouterService;
    }(Marionette.Object));
    exports.BasePageRouterService = BasePageRouterService;
});
//# sourceMappingURL=BasePageRouterService.js.map