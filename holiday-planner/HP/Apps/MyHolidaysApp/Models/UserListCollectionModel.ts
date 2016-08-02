/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import Backbone = require("backbone");
import refItemModel = require("../Models/UserListItemModel");

export class UserListCollectionModel extends Backbone.Collection<refItemModel.UserListItemModel> {
    constructor(options?: any) {
        if (!options)
            options = {};

        super(options);

        this.url = "api/user/all";        
    }
}