/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import refBaseView = require("../../BaseMarionette/BaseItemView");
import refUserItemModel = require("../Models/UserListItemModel");
import refRadioService = require("../../Services/RadioService/RadioPageService");

export class PanelView extends refBaseView.BaseItemView<refUserItemModel.UserListItemModel>
{
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MyHolidaysApp/panel");

        super(options);

    }

    refresh() {
        this.collection.fetch();
    }

}