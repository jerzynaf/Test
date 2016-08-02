var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone", "moment"], function (require, exports, Backbone, moment) {
    "use strict";
    var BaseModel = (function (_super) {
        __extends(BaseModel, _super);
        function BaseModel() {
            _super.apply(this, arguments);
        }
        BaseModel.prototype.removeCommas = function (value) {
            value = "" + value;
            return value.replace(/,/g, '');
        };
        BaseModel.prototype.moneyToPence = function (fieldName) {
            var valueStringWithoutCommas = this.removeCommas(this.get(fieldName));
            var num = parseFloat(valueStringWithoutCommas);
            if (isNaN(num)) {
                this.set(fieldName, null);
            }
            else {
                var dec = (100 * num).toFixed(0);
                this.set(fieldName, dec);
            }
        };
        BaseModel.prototype.isEmpty = function (value) {
            if (value === null) {
                return true;
            }
            if (value === undefined) {
                return true;
            }
            if (value.length === 0) {
                return true;
            }
            return false;
        };
        BaseModel.prototype.isNumber = function (value) {
            if (this.isEmpty(value)) {
                return false;
            }
            var valueWithoutCommas = this.removeCommas(value);
            var parsed = parseInt(valueWithoutCommas);
            if (isNaN(parsed)) {
                return false;
            }
            if ((/^\d*\.?\d*$/.test(valueWithoutCommas)) === false) {
                return false;
            }
            return true;
        };
        BaseModel.prototype.isPositiveNumber = function (value) {
            if (this.isNumber(value)) {
                var valueWithoutCommas = this.removeCommas(value);
                var parsed = parseInt(valueWithoutCommas);
                if (parsed >= 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        };
        BaseModel.prototype.isPositiveOptionalNumber = function (attrs, errors, name, description) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (this.isPositiveNumber(attrs[name])) {
                return true;
            }
            errors[name] = description + " is optional, but must be a positive number if entered";
            return false;
        };
        BaseModel.prototype.isIntegerNumber = function (value) {
            if (this.isEmpty(value)) {
                return false;
            }
            var parsed = parseInt(value);
            if (isNaN(parsed)) {
                return false;
            }
            if ((/^\d*?\d*$/.test(value)) === false) {
                return false;
            }
            return true;
        };
        BaseModel.prototype.isDate = function (value) {
            if (this.isEmpty(value)) {
                return false;
            }
            if (!moment(value, 'DD/MM/YYYY').isValid()) {
                if (!moment(value, 'D MMM YYYY').isValid()) {
                    return false;
                }
            }
            return true;
        };
        BaseModel.prototype.isOptionalDateOfBirth = function (attrs, errors, name, description) {
            /*
             //Date of birth shouldn't be empty
             if (this.isEmpty(attrs[name])) {
                 errors[name] = description + " must be entered";
                 return false;
             }
             else
           
            if (!this.isDate(attrs[name])) {
                errors[name] = description + " must be in a proper format";
                return false;
            }
            */
            if (!this.isOptionalDate(attrs, errors, name, description)) {
                return false;
            }
            if (moment(attrs[name], 'DD/MM/YYYY') > moment()) {
                errors[name] = description + " must be earlier than tomorrow";
                return false;
            }
            return true;
        };
        BaseModel.prototype.isOptionalDate = function (attrs, errors, name, description, errorName) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (this.isDate(attrs[name])) {
                return true;
            }
            if (errorName === undefined) {
                errors[name] = description + " is optional, but must be a date if entered";
            }
            else {
                errors[errorName] = description + " is optional, but must be a date if entered";
            }
            return false;
        };
        BaseModel.prototype.isOptionalNumber = function (attrs, errors, name, description, errorName) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (this.isNumber(attrs[name])) {
                return true;
            }
            if (errorName === undefined) {
                errors[name] = description + " is optional, but must be a number if entered";
            }
            else {
                errors[errorName] = description + " is optional, but must be a number if entered";
            }
            return false;
        };
        BaseModel.prototype.isOcupationValid = function (attrs, errors, name, description) {
            $.ajax({
                url: "/api/autosuggest/occupation/isValid/?query=" + this.get("Occupation"),
                async: false
            }).then(function (data) {
                if (data === true) {
                    return true;
                }
                else {
                    errors[name] = description + " is invalid";
                }
            });
            return false;
        };
        BaseModel.prototype.isOptionalIntegerNumber = function (attrs, errors, name, description) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (this.isIntegerNumber(attrs[name])) {
                return true;
            }
            errors[name] = description + " is optional, but must be an integer number if entered";
            return false;
        };
        BaseModel.prototype.isOptionalNumberMin = function (attrs, errors, minValue, name, description) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (this.isNumber(attrs[name])) {
                var value = parseInt(attrs[name]);
                if (value < minValue) {
                    errors[name] = description + " is optional, but must be a number greater than " + minValue + " or equal to " + minValue + " if entered";
                    return false;
                }
                return true;
            }
            else {
                errors[name] = description + " is optional, but must be a number if entered";
                return false;
            }
        };
        BaseModel.prototype.maxLength = function (attrs, errors, maxLength, name, description) {
            if (this.isEmpty(attrs[name])) {
                return true;
            }
            if (attrs[name].length > maxLength) {
                errors[name] = description + " must be " + maxLength + " or less";
                return false;
            }
            return true;
        };
        BaseModel.prototype.isMandatoryText = function (attrs, errors, name, description) {
            if (!this.isEmpty(attrs[name])) {
                return true;
            }
            errors[name] = description + " is mandatory";
            return false;
        };
        BaseModel.prototype.isMandatoryNumber = function (attrs, errors, name, description) {
            if (!this.isEmpty(attrs[name])) {
                return true;
            }
            errors[name] = description + " is mandatory";
            return false;
        };
        BaseModel.prototype.isValidPhoneNumber = function (attrs, errors, name, description, maxLength) {
            var phoneNumber = attrs[name].replace(/[{()}]/g, '').replace(/\s+/g, '').replace(/\+|-/g, '');
            if (this.isEmpty(phoneNumber)) {
                return true;
            }
            if (phoneNumber.length > maxLength) {
                errors[name] = description + " must be " + maxLength + " or less";
                return false;
            }
            var containsOnlyDigits = /^\d+$/.test(phoneNumber);
            if (containsOnlyDigits) {
                return true;
            }
            else {
                errors[name] = description + " is not valid";
                return false;
            }
        };
        BaseModel.prototype.isValidEmail = function (attrs, errors, name, description) {
            var emailAddress = attrs[name];
            if (this.isEmpty(emailAddress)) {
                return true;
            }
            var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var isValidEmail = regularExpression.test(emailAddress);
            if (isValidEmail) {
                return true;
            }
            else {
                errors[name] = description + " is not valid";
                return false;
            }
        };
        return BaseModel;
    }(Backbone.Model));
    exports.BaseModel = BaseModel;
});
//# sourceMappingURL=BaseModel.js.map