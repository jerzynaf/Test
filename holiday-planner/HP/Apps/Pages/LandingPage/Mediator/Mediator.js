var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.radio", "../Views/LayoutView", "../../../Services/RadioService/RadioAuthenticationService", "../../../Services/RadioService/RadioPageService"], function (require, exports, refRadio, refLayoutView, refRadioAuthentication, refRadioPageSvc) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(region) {
            _super.call(this);
            this.setupMessageHandlers();
            var view = new refLayoutView.LayoutView();
            region.show(view);
        }
        Mediator.prototype.setupMessageHandlers = function () {
            var _this = this;
            this.channelAuthentication = refRadio.channel(refRadioAuthentication.RadioAuthenticationService.radioDefinition.name);
            this.listenTo(this.channelAuthentication, refRadioAuthentication.RadioAuthenticationService.radioDefinition.actions.success, function (model) { return _this.onAuthenticated(model); });
        };
        Mediator.prototype.onAuthenticated = function (model) {
            console.log("Authenticated UserID  :" + model.get("MemberId"));
            console.log("Authenticated UserName:" + model.get("UserName"));
            refRadioPageSvc.RadioPageService.showMainFeedPage();
        };
        return Mediator;
    }(Marionette.Object));
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map