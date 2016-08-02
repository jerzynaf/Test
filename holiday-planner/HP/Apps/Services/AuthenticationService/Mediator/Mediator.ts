import Marionette = require("backbone.marionette");
import refRadioAuthentication = require("../../RadioService/RadioAuthenticationService");
import refAuthenticateModel = require("../Models/AuthenticationModel");

export class Mediator extends Marionette.Object {

    private authModel: refAuthenticateModel.UserAuthenticateModel;

    constructor(username:string, password:string) {
        super();

        this.authModel = new refAuthenticateModel.UserAuthenticateModel(username, password);
        this.authModel.save().done(() => {
            this.evaluateAuthentication();       
        });
    }

    private evaluateAuthentication() {
        if (this.authModel.isAuthenticated()) {
            refRadioAuthentication.RadioAuthenticationService.notifySuccess(this.authModel);
        }
        else {
            refRadioAuthentication.RadioAuthenticationService.notifyFailure();
        }
    }
}