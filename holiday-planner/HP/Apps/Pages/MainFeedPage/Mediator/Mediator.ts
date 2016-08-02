import refLayoutView = require("../Views/LayoutView");


export class Mediator extends Marionette.Object {

    private channelAuthentication: Backbone.Radio.Channel;

    constructor(region: Marionette.Region) {
        super();    
        var view = new refLayoutView.LayoutView();
        region.show(view);
    }
    
}