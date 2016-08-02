define(["require", "exports", "backbone.radio", "toastr", "../RadioService/RadioNotificationService"], function (require, exports, refRadio, refToastr, refRadioNotificationService) {
    "use strict";
    var NotificationService = (function () {
        function NotificationService() {
            this.setupMessageHandlers();
        }
        NotificationService.prototype.setupMessageHandlers = function () {
            var _this = this;
            this.myChannel = refRadio.channel(refRadioNotificationService.RadioNotificationService.radioDefinition.name);
            this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.success, function (title, message) { return _this.showSuccess(title, message); });
            this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.info, function (title, message) { return _this.showInfo(title, message); });
            this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.warning, function (title, message) { return _this.showWarning(title, message); });
            this.myChannel.on(refRadioNotificationService.RadioNotificationService.radioDefinition.actions.error, function (title, message) { return _this.showError(title, message); });
        };
        NotificationService.prototype.showSuccess = function (title, message) {
            refToastr.success(message, title, { "positionClass": "toast-bottom-right" });
        };
        NotificationService.prototype.showInfo = function (title, message) {
            refToastr.info(message, title, { "positionClass": "toast-bottom-right" });
        };
        NotificationService.prototype.showWarning = function (title, message) {
            refToastr.warning(message, title, { "positionClass": "toast-bottom-right" });
        };
        NotificationService.prototype.showError = function (title, message) {
            refToastr.error(message, title, { "positionClass": "toast-bottom-right" });
        };
        return NotificationService;
    }());
    exports.NotificationService = NotificationService;
});
//# sourceMappingURL=NotificationService.js.map