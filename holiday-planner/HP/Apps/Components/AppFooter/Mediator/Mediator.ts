import refFooterView = require("../Views/FooterView");

export class Mediator extends Marionette.Object {

    constructor(region: Marionette.Region) {
        super();

        var view = new refFooterView.FooterView();
        region.show(view);
    }

}
