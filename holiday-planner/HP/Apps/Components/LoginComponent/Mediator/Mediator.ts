import refLoginView = require("../Views/LoginView");

export class Mediator extends Marionette.Object {

    constructor(region: Marionette.Region) {
        super();

        var view = new refLoginView.LoginView();
        region.show(view);
    }

}
