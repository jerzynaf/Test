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

        options.template = super.loadTemplate("MyHolidaysApp/footer");
        options.events = {
            "click #btnRequest": () => { this.onRequestButtonClicked() }
        };

        super(options);
    }

    onRequestButtonClicked() {
        //refRadioPageService.RadioPageService.saveUserDetails();
        console.log("Making a new request is not implemented yet!");
    }

    onViewShown() {
    }
}