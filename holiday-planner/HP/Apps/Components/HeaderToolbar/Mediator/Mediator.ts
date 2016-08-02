import refHeaderToolbarView = require("../Views/HeaderToolbarView");

export class Mediator extends Marionette.Object {

    constructor(region: Marionette.Region) {
        super();

        var view = new refHeaderToolbarView.HeaderToolbarView();
        region.show(view);
    }

}
