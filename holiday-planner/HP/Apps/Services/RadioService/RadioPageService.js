define(["require", "exports", "backbone.radio"], function (require, exports, refRadio) {
    "use strict";
    var RadioPageService = (function () {
        function RadioPageService() {
        }
        RadioPageService.showLandingPage = function () {
            refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showLandingPage);
        };
        RadioPageService.showMainFeedPage = function () {
            refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMainFeedPage);
        };
        RadioPageService.showMyHolidaysPage = function () {
            refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMyHolidays);
        };
        RadioPageService.showMaintainUsersPage = function () {
            refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMaintainUsersPage);
        };
        RadioPageService.radioDefinition = {
            name: "page",
            actions: {
                showLandingPage: "show:LandingPage",
                showMainFeedPage: "show:MainFeedPage",
                showMaintainUsersPage: "show:MaintainUsers",
                showMyHolidays: "show:MyHolidays"
            }
        };
        RadioPageService.myHolidays = {
            name: "myHolidays",
            actions: {
                createNewRequest: "create:NewRequest",
                cancelRequest: "cancel:Request"
            }
        };
        return RadioPageService;
    }());
    exports.RadioPageService = RadioPageService;
});
//# sourceMappingURL=RadioPageService.js.map