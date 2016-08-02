import Backbone = require("backbone");

export class MenuItemModel extends Backbone.Model {

    constructor(name : string, description : string, channel: string, action : string ) {        
        super();
        this.set("name", name);
        this.set("description", description);
        this.set("channel", channel);
        this.set("action", action);
    }
}