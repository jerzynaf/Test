var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView", "backbone.radio", "../../../Services/AuthenticationService/Mediator/Mediator", "../../../Services/RadioService/RadioAuthenticationService"], function (require, exports, refBaseView, refRadio, refAuthenticationSvc, refRadioAuthentication) {
    "use strict";
    var LoginView = (function (_super) {
        __extends(LoginView, _super);
        function LoginView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/Login/login");
            options.events = { "click #btn-login": function (e) { _this.onLoginClicked(e); } };
            _super.call(this, options);
            this.ui = {
                username: "#txtUserName",
                password: "#txtPassword",
                validation: '#lblValidation'
            };
            this.setupMessageHandlers();
        }
        LoginView.prototype.onViewShown = function () {
            this.ui.validation.hide();
        };
        LoginView.prototype.setupMessageHandlers = function () {
            var _this = this;
            this.channelAuthentication = refRadio.channel(refRadioAuthentication.RadioAuthenticationService.radioDefinition.name);
            this.listenTo(this.channelAuthentication, refRadioAuthentication.RadioAuthenticationService.radioDefinition.actions.failure, function () { return _this.onAuthenticationFailed(); });
        };
        LoginView.prototype.onAuthenticationFailed = function () {
            this.ui.validation.show();
            this.ui.validation.text("Invalid username or password");
        };
        LoginView.prototype.onLoginClicked = function (e) {
            e.preventDefault();
            var username = this.ui.username.val();
            var password = this.ui.password.val();
            var svc = new refAuthenticationSvc.Mediator(username, password);
        };
        return LoginView;
    }(refBaseView.BaseLayoutView));
    exports.LoginView = LoginView;
});
//# sourceMappingURL=LoginView.js.map