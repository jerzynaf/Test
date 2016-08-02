import refRadio = require("backbone.radio");
import refToastr = require("toastr");
import refRadioNotificationService = require("../RadioService/RadioNotificationService")

export class NotificationService {

    private myChannel: Backbone.Radio.Channel;

    constructor() {
        this.setupMessageHandlers();
    }


    private setupMessageHandlers() {
        this.myChannel = refRadio.channel(refRadioNotificationService.RadioNotificationService.radioDefinition.name);

        this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.success, (title, message) => this.showSuccess(title, message));
        this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.info, (title, message) => this.showInfo(title, message));
        this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.warning, (title, message) => this.showWarning(title, message));
        this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.error, (title, message) => this.showError(title, message));
    }

    private showSuccess(title: string, message: string) {
        refToastr.success(message, title, { "positionClass": "toast-bottom-right" });
    }

    private showInfo(title: string, message: string) {
        refToastr.info(message, title, { "positionClass": "toast-bottom-right" });
    }

    private showWarning(title: string, message: string) {
        refToastr.warning(message, title, { "positionClass": "toast-bottom-right" });
    }

    private showError(title: string, message: string) {
        refToastr.error(message, title, { "positionClass": "toast-bottom-right" });
    }

}