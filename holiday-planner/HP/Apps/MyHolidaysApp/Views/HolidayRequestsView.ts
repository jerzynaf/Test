import refBaseView = require("../../BaseMarionette/BaseItemView");
import refRadioPageService = require("../../Services/RadioService/RadioPageService");
import refBaseModel = require("../../BaseBackbone/BaseModel")


export class HolidayRequestsView extends refBaseView.BaseItemView<refBaseModel.BaseModel> {
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MyHolidaysApp/holidayRequests");

        options.events = {
        };

        super(options);
    }

    onViewShown() {
    }

    //private onSaveButtonClicked(e) {
    //    e.preventDefault();
    //    refRadioPageService.RadioPageService.saveUserDetails();
    //}

    validateScreen() {
        //var data = Backbone.Syphon.serialize(this);
        //this.model.set(data);
        //this.clearValidationErrors();
        //if (!this.model.isValid()) {
        //    this.showValidationErrors();
        //    return false;
        //}
        return true;
    }

}