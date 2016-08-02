/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import Backbone = require("backbone");

export class UserListItemModel extends Backbone.Model {

    constructor(options?: any) {
        if (!options)
            options = {};
        super(options);
 
    }    
}