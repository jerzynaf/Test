/// <reference path="../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../typings/marionette/marionette.d.ts"/>

import refBaseModel = require("../../../BaseBackbone/BaseModel");

export class ToolbarModel extends refBaseModel.BaseModel {

    constructor(options?: any) {
        if (!options)
            options = {};

        super(options);
    }

    validate(attrs, options) {
    }
}