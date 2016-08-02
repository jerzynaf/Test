import refHeaderView = require("../Views/HeaderView");

export class Mediator extends Marionette.Object {

    constructor(region: Marionette.Region) {
        super();

        var view = new refHeaderView.HeaderView();
        region.show(view);
    }


}
