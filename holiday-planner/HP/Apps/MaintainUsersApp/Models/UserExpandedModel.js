/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseBackbone/BaseModel"], function (require, exports, refBaseModel) {
    "use strict";
    var UserExpandedModel = (function (_super) {
        __extends(UserExpandedModel, _super);
        function UserExpandedModel(userId, options) {
            if (!options)
                options = {};
            _super.call(this, options);
            this.idAttribute = "UserId";
            this.url = "api/user/" + userId + "/expanded";
        }
        UserExpandedModel.prototype.convertMoneyToPence = function () {
            this.moneyToPence("TargetDealsAmount");
            this.moneyToPence("TargetConversionRate");
        };
        UserExpandedModel.prototype.validate = function (attrs, options) {
            var errors = {};
            console.log("Checking for validation errors");
            this.isMandatoryText(attrs, errors, "UserName", "User Name");
            this.maxLength(attrs, errors, 50, "UserName", "User Name");
            this.isMandatoryText(attrs, errors, "Forename", "Forename");
            this.maxLength(attrs, errors, 250, "Forename", "Forename");
            this.isMandatoryText(attrs, errors, "Surname", "Surname");
            this.maxLength(attrs, errors, 250, "Surname", "Surname");
            this.isOptionalNumber(attrs, errors, "TargetDealsCount", "Target Deals Count");
            this.isOptionalNumber(attrs, errors, "TargetDealsAmount", "Target Deals Amount");
            this.isOptionalNumber(attrs, errors, "TargetDialsCount", "Target Deals Amount");
            this.isOptionalNumber(attrs, errors, "TargetConversationsCount", "Target Conversations Count");
            this.isOptionalNumber(attrs, errors, "TargetConversionRate", "Target Conversion Rate");
            this.maxLength(attrs, errors, 200, "TelephonyUserName", "Telephony User Name");
            this.maxLength(attrs, errors, 200, "TelephonyPassword", "Telephony Password");
            if (!_.isEmpty(errors)) {
                return errors;
            }
            return null;
        };
        return UserExpandedModel;
    }(refBaseModel.BaseModel));
    exports.UserExpandedModel = UserExpandedModel;
});
//# sourceMappingURL=UserExpandedModel.js.map