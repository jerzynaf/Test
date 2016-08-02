import refRadio = require("backbone.radio");

export class RadioPageService {

    static radioDefinition = {
        name: "page",
        actions: {
            showLandingPage: "show:LandingPage",
            showMainFeedPage: "show:MainFeedPage",

            showMaintainUsersPage: "show:MaintainUsers",
            showMyHolidays: "show:MyHolidays"

        }
    };

    static myHolidays = {
        name: "myHolidays",
        actions: {
            createNewRequest: "create:NewRequest",
            cancelRequest: "cancel:Request"
        }
    }


    static showLandingPage() {
        refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showLandingPage);
    }

    static showMainFeedPage() {
        refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMainFeedPage);
    }

    static showMyHolidaysPage() {
        refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMyHolidays);
    }

    static showMaintainUsersPage() {
        refRadio.channel(RadioPageService.radioDefinition.name).trigger(RadioPageService.radioDefinition.actions.showMaintainUsersPage);
    }

}