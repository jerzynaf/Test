import refRadio = require("backbone.radio");

export class RadioNotificationService {
    
    static radioDefinition = {
        name: "notify",
        actions: {
            success: "success",
            info: "info",
            warning: "warning",
            error: "error"
        }
    };


/*
*
*  NOTIFY STRONGLY TYPED MESSAGE SENDERS
*
*/
    public static notifySuccess(title: string, message: string) {
        refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.success, title, message);
    }

    public static notifyInfo(title: string, message: string) {
        refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.info, title, message);
    }

    public static notifyWarning(title: string, message: string) {
        refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.warning, title, message);
    }

    public static notifyError(title: string, message: string) {
        refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.error, title, message);
    }

}