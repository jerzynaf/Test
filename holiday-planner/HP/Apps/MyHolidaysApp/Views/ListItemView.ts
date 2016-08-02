/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import refBaseView = require("../../BaseMarionette/BaseItemView");
import refItemModel = require("../Models/UserListItemModel");

export class ListItemView extends refBaseView.BaseItemView<refItemModel.UserListItemModel> {
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MyHolidaysApp/userListItem");
        options.events = {
            "click": () => { this.onUserSelected() }
        };

        super(options);

        this.listenTo(this.model, "change", this.onModelUpdated);
    }

    onUserSelected() {
        this.trigger("user-selected", this.model);
    }

    onViewShown() {
        //if (this.model.get("Show")) {
        //    this.$el.show();
        //} else {
        //    this.$el.hide();
        //}
    }

    onModelUpdated(e) {
        if (this.model.get("Show")) {
            this.$el.show();
        } else {
            this.$el.hide();
        }
    }
}