var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette", "../../RadioService/RadioAuthenticationService", "../Models/AuthenticationModel"], function (require, exports, Marionette, refRadioAuthentication, refAuthenticateModel) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(username, password) {
            var _this = this;
            _super.call(this);
            this.authModel = new refAuthenticateModel.UserAuthenticateModel(username, password);
            this.authModel.save().done(function () {
                _this.evaluateAuthentication();
            });
        }
        Mediator.prototype.evaluateAuthentication = function () {
            if (this.authModel.isAuthenticated()) {
                refRadioAuthentication.RadioAuthenticationService.notifySuccess(this.authModel);
            }
            else {
                refRadioAuthentication.RadioAuthenticationService.notifyFailure();
            }
        };
        return Mediator;
    }(Marionette.Object));
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map