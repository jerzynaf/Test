/// <reference path="../../../../typings/backbone/backbone.d.ts" />
/// <reference path="../../../../typings/marionette/marionette.d.ts" />

import refBaseView = require("../../../BaseMarionette/BaseLayoutView");
import refHeaderToolbar = require("../../../Components/HeaderToolbar/Mediator/Mediator");

export class HeaderView extends refBaseView.BaseLayoutView<Backbone.Model> {

    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("Components/AppHeader/Header");

        super(options);
    }


    onViewShown() {
        this.setupRegions();
        this.displayToolbar();

    }

    private displayToolbar() {
        const region = this.getRegion("toolbar");
        const menuApp = new refHeaderToolbar.Mediator(region);

    }

    private setupRegions() {
        this.addRegions({ toolbar: ".toolbar" });

    }
}