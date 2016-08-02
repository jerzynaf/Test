import Marionette = require("backbone.marionette");

import refLayoutView = require("../Views/LayoutView");
import Backbone = require("backbone");

export class Mediator extends Marionette.Object {

    private layoutView: refLayoutView.LayoutView;

    constructor(region: Marionette.Region) {
        super();

        this.layoutView = new refLayoutView.LayoutView();
        region.show(this.layoutView);
    }
}
