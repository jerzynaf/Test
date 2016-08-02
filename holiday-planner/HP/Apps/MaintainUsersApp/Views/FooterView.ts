/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import refBaseView = require("../../BaseMarionette/BaseItemView");
import refItemModel = require("../Models/UserListItemModel");
import refRadioPageService = require("../../Services/RadioService/RadioPageService");

export class FooterView extends refBaseView.BaseItemView<Backbone.Model> {
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MaintainUsersApp/footer");
        options.events = {
            "click #btnSave": () => { this.onSaveButtonClicked() }
        };

        super(options);
    }

    onSaveButtonClicked() {
        //refRadioPageService.RadioPageService.saveUserDetails();
    }

    onViewShown() {
        $("#btnSave").hide();
    }
}