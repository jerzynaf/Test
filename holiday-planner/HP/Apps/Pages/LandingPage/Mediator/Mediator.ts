import refRadio = require("backbone.radio");
import refLayoutView = require("../Views/LayoutView");
import refRadioAuthentication = require("../../../Services/RadioService/RadioAuthenticationService");
import refAuthenticationModel = require("../../../Services/AuthenticationService/Models/AuthenticationModel");
import refRadioPageSvc = require("../../../Services/RadioService/RadioPageService");

export class Mediator extends Marionette.Object {

    private channelAuthentication: Backbone.Radio.Channel;

    constructor(region: Marionette.Region) {
        super();

        this.setupMessageHandlers();
        var view = new refLayoutView.LayoutView();
        region.show(view);
    }

    private setupMessageHandlers() {
        this.channelAuthentication = refRadio.channel(refRadioAuthentication.RadioAuthenticationService.radioDefinition.name);
        this.listenTo(this.channelAuthentication, refRadioAuthentication.RadioAuthenticationService.radioDefinition.actions.success, (model: refAuthenticationModel.UserAuthenticateModel) => this.onAuthenticated(model));        
    }

    private onAuthenticated(model: refAuthenticationModel.UserAuthenticateModel) {
        console.log("Authenticated UserID  :" + model.get("MemberId"));
        console.log("Authenticated UserName:" + model.get("UserName"));
        refRadioPageSvc.RadioPageService.showMainFeedPage();

    }
}