/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseBackbone/BaseModel"], function (require, exports, refBaseModel) {
    "use strict";
    var UserModel = (function (_super) {
        __extends(UserModel, _super);
        function UserModel(userId, options) {
            if (!options)
                options = {};
            _super.call(this, options);
            this.url = "api/user/" + userId;
        }
        UserModel.prototype.validate = function (attrs, options) {
            var errors = {};
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
        };
        return UserModel;
    }(refBaseModel.BaseModel));
    exports.UserModel = UserModel;
});
//# sourceMappingURL=UserModel.js.map