define(["require", "exports", "backbone.radio"], function (require, exports, refRadio) {
    "use strict";
    var RadioNotificationService = (function () {
        function RadioNotificationService() {
        }
        /*
        *
        *  NOTIFY STRONGLY TYPED MESSAGE SENDERS
        *
        */
        RadioNotificationService.notifySuccess = function (title, message) {
            refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.success, title, message);
        };
        RadioNotificationService.notifyInfo = function (title, message) {
            refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.info, title, message);
        };
        RadioNotificationService.notifyWarning = function (title, message) {
            refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.warning, title, message);
        };
        RadioNotificationService.notifyError = function (title, message) {
            refRadio.channel(RadioNotificationService.radioDefinition.name).trigger(RadioNotificationService.radioDefinition.actions.error, title, message);
        };
        RadioNotificationService.radioDefinition = {
            name: "notify",
            actions: {
                success: "success",
                info: "info",
                warning: "warning",
                error: "error"
            }
        };
        return RadioNotificationService;
    }());
    exports.RadioNotificationService = RadioNotificationService;
});
//# sourceMappingURL=RadioNotificationService.js.map