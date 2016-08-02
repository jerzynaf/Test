import refBaseView = require("../../../BaseMarionette/BaseLayoutView");
import refRadioPageService = require("../../../Services/RadioService/RadioPageService");

export class HeaderToolbarView extends refBaseView.BaseLayoutView<Backbone.Model> {

    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("Components/HeaderToolbar/HeaderToolbar");
        options.events = {
            "click #MyHolidays": () => { this.onMyHolidaysClicked() },
            "click #Users": () => { this.onUsersClicked() }
        };

        //options.ui = {
        //    "#LeadId": "LeadId"
        //};
        super(options);
    }

    private onMyHolidaysClicked() {
        refRadioPageService.RadioPageService.showMyHolidaysPage();
    }

    private onUsersClicked() {
        refRadioPageService.RadioPageService.showMaintainUsersPage();
    }
}