define(["require", "exports", "backbone.radio"], function (require, exports, refRadio) {
    "use strict";
    var RadioAuthenticationService = (function () {
        function RadioAuthenticationService() {
        }
        /*
        *
        *  NOTIFY STRONGLY TYPED MESSAGE SENDERS
        *
        */
        RadioAuthenticationService.notifySuccess = function (memberModel) {
            refRadio.channel(RadioAuthenticationService.radioDefinition.name).trigger(RadioAuthenticationService.radioDefinition.actions.success, memberModel);
        };
        RadioAuthenticationService.notifyFailure = function () {
            refRadio.channel(RadioAuthenticationService.radioDefinition.name).trigger(RadioAuthenticationService.radioDefinition.actions.failure);
        };
        RadioAuthenticationService.radioDefinition = {
            name: "authentication",
            actions: {
                success: "success",
                failure: "error"
            }
        };
        return RadioAuthenticationService;
    }());
    exports.RadioAuthenticationService = RadioAuthenticationService;
});
//# sourceMappingURL=RadioAuthenticationService.js.map