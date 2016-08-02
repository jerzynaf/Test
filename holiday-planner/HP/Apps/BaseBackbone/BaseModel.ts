/// <reference path="../../typings/backbone/backbone.d.ts"/>
import Backbone = require("backbone");
import moment = require("moment");

export class BaseModel extends Backbone.Model {

    private removeCommas(value: string) {
        value = "" + value;
        return value.replace(/,/g, '');
    }

    public moneyToPence(fieldName: string) {
        var valueStringWithoutCommas = this.removeCommas(this.get(fieldName));
        var num = parseFloat(valueStringWithoutCommas);
        if (isNaN(num)) {
            this.set(fieldName, null);
        } else {
            var dec = (100 * num).toFixed(0);
            this.set(fieldName, dec);
        }
    }

    public isEmpty(value: any): boolean {

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
    }

    public isNumber(value: string): boolean {

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
    }

    public isPositiveNumber(value: string): boolean {

        if (this.isNumber(value)) {
            var valueWithoutCommas = this.removeCommas(value);
            var parsed = parseInt(valueWithoutCommas);
            if (parsed >= 0) {
                return true;
            } else {
                return false;
            }
        }

        return false;

    }

    public isPositiveOptionalNumber(attrs, errors, name: string, description: string): boolean {

        if (this.isEmpty(attrs[name])) {
            return true;
        }

        if (this.isPositiveNumber(attrs[name])) {
            return true;
        }

        errors[name] = description + " is optional, but must be a positive number if entered";
        return false;
    }

    public isIntegerNumber(value: string): boolean {

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
    }

    public isDate(value: any): boolean {

        if (this.isEmpty(value)) {
            return false;
        }

        if (!moment(value, 'DD/MM/YYYY').isValid()) {

            if (!moment(value, 'D MMM YYYY').isValid()) {
                return false;
            }

        }

        return true;
    }

    public isOptionalDateOfBirth(attrs, errors, name: string, description: string): boolean {
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
    }

    public isOptionalDate(attrs, errors, name: string, description: string, errorName?: string): boolean {

        if (this.isEmpty(attrs[name])) {
            return true;
        }

        if (this.isDate(attrs[name])) {
            return true;
        }


        if (errorName === undefined) {
            errors[name] = description + " is optional, but must be a date if entered";
        } else {
            errors[errorName] = description + " is optional, but must be a date if entered";
        }

        return false;
    }

    public isOptionalNumber(attrs, errors, name: string, description: string, errorName?: string): boolean {

        if (this.isEmpty(attrs[name])) {
            return true;
        }


        if (this.isNumber(attrs[name])) {
            return true;
        }

        if (errorName === undefined) {
            errors[name] = description + " is optional, but must be a number if entered";
        } else {
            errors[errorName] = description + " is optional, but must be a number if entered";
        }

        return false;
    }

    public isOcupationValid(attrs, errors, name: string, description: string): boolean {

        $.ajax({
            url: "/api/autosuggest/occupation/isValid/?query=" + this.get("Occupation"),
            async: false
        }).then(function (data) {

            if (data === true) {
                return true;
            } else {
                errors[name] = description + " is invalid";
            }
        });

        return false;
    }


    public isOptionalIntegerNumber(attrs, errors, name: string, description: string): boolean {

        if (this.isEmpty(attrs[name])) {
            return true;
        }

        if (this.isIntegerNumber(attrs[name])) {
            return true;
        }

        errors[name] = description + " is optional, but must be an integer number if entered";
        return false;
    }

    public isOptionalNumberMin(attrs, errors, minValue: number, name: string, description: string): boolean {
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

        } else {
            errors[name] = description + " is optional, but must be a number if entered";
            return false;
        }
    }

    public maxLength(attrs, errors, maxLength: number, name: string, description: string): boolean {
        if (this.isEmpty(attrs[name])) {
            return true;
        }

        if (attrs[name].length > maxLength) {
            errors[name] = description + " must be " + maxLength + " or less";
            return false;
        }

        return true;
    }

    public isMandatoryText(attrs, errors, name: string, description: string): boolean {

        if (!this.isEmpty(attrs[name])) {
            return true;
        }

        errors[name] = description + " is mandatory";
        return false;
    }

    public isMandatoryNumber(attrs, errors, name: string, description: string): boolean {

        if (!this.isEmpty(attrs[name])) {
            return true;
        }

        errors[name] = description + " is mandatory";
        return false;

    }

    public isValidPhoneNumber(attrs, errors, name: string, description: string, maxLength: number): boolean {

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
        } else {
            errors[name] = description + " is not valid";
            return false;
        }
    }

    public isValidEmail(attrs, errors, name: string, description: string): boolean {

        var emailAddress = attrs[name];

        if (this.isEmpty(emailAddress)) {
            return true;
        }

        var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmail = regularExpression.test(emailAddress);

        if (isValidEmail) {
            return true;
        } else {
            errors[name] = description + " is not valid";
            return false;
        }
    }
}