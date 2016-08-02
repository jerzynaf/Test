import refRadio = require("backbone.radio");
import refMemberModel = require("../AuthenticationService/Models/AuthenticationModel");

export class RadioAuthenticationService {

    static radioDefinition = {
        name: "authentication",
        actions: {
            success: "success",
            failure: "error"
        }
    };


    /*
    *
    *  NOTIFY STRONGLY TYPED MESSAGE SENDERS
    *
    */
    public static notifySuccess(memberModel: refMemberModel.UserAuthenticateModel) {
        refRadio.channel(RadioAuthenticationService.radioDefinition.name).trigger(RadioAuthenticationService.radioDefinition.actions.success, memberModel);
    }

    public static notifyFailure() {
        refRadio.channel(RadioAuthenticationService.radioDefinition.name).trigger(RadioAuthenticationService.radioDefinition.actions.failure);
    }    
}