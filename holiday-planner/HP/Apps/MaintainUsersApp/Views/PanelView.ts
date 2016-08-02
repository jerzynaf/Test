/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import refBaseView = require("../../BaseMarionette/BaseCompositeView");
import refUserItemModel = require("../Models/UserListItemModel");
import refUserItemView = require("../Views/UserListItemView");
import refRadioService = require("../../Services/RadioService/RadioPageService");

export class PanelView extends refBaseView.BaseCompositeView<refUserItemModel.UserListItemModel, refUserItemView.UserListItemView>
{
    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("MaintainUsersApp/panel");

        super(options);

        this.ui = {
            filter: "#filter"
        }

        this.childView = refUserItemView.UserListItemView;
        this.childViewContainer = '#user-list';
    }

    refresh() {
        this.collection.fetch();
    }

}