/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>

import Backbone = require("backbone");
import refBaseModel = require("../../BaseBackbone/BaseModel");

export class UserModel extends refBaseModel.BaseModel {

    constructor(userId: string, options?: any) {
        if (!options)
            options = {};
        super(options);

        this.url = `api/user/${userId}`;
    }

    validate(attrs, options) {
        var errors: any = {};

        this.isMandatoryText(attrs, errors, "UserName", "Username");
        this.isMandatoryText(attrs, errors, "Password", "Password");
        this.isMandatoryText(attrs, errors, "Forename", "Forename");
        this.isMandatoryText(attrs, errors, "Surname", "Surname");
        this.isMandatoryText(attrs, errors, "Email", "Email");

        if (!_.isEmpty(errors)) {
            return errors;
        }

        if (!_.isEmpty(errors)) {
            return errors;
        }
        return null;
    }
}