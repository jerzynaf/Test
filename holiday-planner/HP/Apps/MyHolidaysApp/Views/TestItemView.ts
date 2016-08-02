/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import refBaseView = require("../../BaseMarionette/BaseItemView");
import refModel = require("../../BaseBackbone/BaseModel");

export class ListItemView extends refBaseView.BaseItemView<refModel.BaseModel> {
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MyHolidaysApp/holidayRequests");

        super(options);
    }

    onViewShown() {
    }
}