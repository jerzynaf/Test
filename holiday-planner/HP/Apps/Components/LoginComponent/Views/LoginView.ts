import refBaseView = require("../../../BaseMarionette/BaseLayoutView");
import refRadio = require("backbone.radio");
import refAuthenticationSvc = require("../../../Services/AuthenticationService/Mediator/Mediator");
import refRadioAuthentication = require("../../../Services/RadioService/RadioAuthenticationService");

export class LoginView extends refBaseView.BaseLayoutView < Backbone.Model > {

    private channelAuthentication: Backbone.Radio.Channel;

    constructor(options?: any) {
        if (!options) options = {};
        
        options.template = super.loadTemplate("Components/Login/login");        
        options.events = { "click #btn-login": (e) => { this.onLoginClicked(e) } };

        super(options);

        this.ui = {
            username: "#txtUserName",
            password: "#txtPassword",
            validation:'#lblValidation'
        }

        this.setupMessageHandlers();
    }

    onViewShown() {
        this.ui.validation.hide();
    }

    private setupMessageHandlers() {
        this.channelAuthentication = refRadio.channel(refRadioAuthentication.RadioAuthenticationService.radioDefinition.name);
        this.listenTo(this.channelAuthentication, refRadioAuthentication.RadioAuthenticationService.radioDefinition.actions.failure, () => this.onAuthenticationFailed());
    }

    onAuthenticationFailed() {
        this.ui.validation.show();
        this.ui.validation.text("Invalid username or password");
    }

    onLoginClicked(e) {
        e.preventDefault();
        var username = this.ui.username.val();
        var password = this.ui.password.val();
        var svc = new refAuthenticationSvc.Mediator(username,password);
    }
}