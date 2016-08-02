import refBaseView = require("../../BaseMarionette/BaseItemView");
import refUserModel = require("../Models/UserModel");
import refRadioPageService = require("../../Services/RadioService/RadioPageService");

export class UserDetailsView extends refBaseView.BaseItemView<refUserModel.UserModel> {
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MaintainUsersApp/userDetails");

        options.events = {
        };

        super(options);
    }

    onViewShown() {
        $("#RoleEnabled").val(this.model.get("RoleEnabled").toString());
        $("#RoleId").val(this.model.get("RoleId"));
        $("#btnSave").show();
    }
    
    //private onSaveButtonClicked(e) {
    //    e.preventDefault();
    //    refRadioPageService.RadioPageService.saveUserDetails();
    //}

    validateScreen() {
        var data = Backbone.Syphon.serialize(this);
        this.model.set(data);
        this.clearValidationErrors();
        if (!this.model.isValid()) {
            this.showValidationErrors();
            return false;
        }
        return true;
    }

}