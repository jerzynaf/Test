import Backbone = require("backbone");
import refItemModel = require("../Models/MenuItemModel");

export class MenuCollectionModel extends Backbone.Collection<refItemModel.MenuItemModel> {
    constructor(options?: any) {
        if (!options)
            options = {};

         
        MenuCollectionModel.prototype.model = refItemModel.MenuItemModel;

        super(options);
    }
}