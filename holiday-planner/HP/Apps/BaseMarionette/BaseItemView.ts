/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>


import Handlebars = require("handlebars");
import Marionette = require("backbone.marionette");
import refTemplateHelper = require("../BaseMarionette/TemplateLoader");


export class BaseItemView<TModel extends Backbone.Model> extends Marionette.ItemView<TModel>
{
    constructor(options?: Backbone.ViewOptions<TModel>) {
        super(options);
        this.on("show", this.onViewShown);
        this.on("render", this.onRender);

        Handlebars.registerHelper('ifCond', function (v1, v2, options) {
            if (v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });
    }

    loadTemplate(name: string): HandlebarsTemplateDelegate {
        var template = refTemplateHelper.TemplateHelper.loadTemplate(name);
        return template;
    }

    onViewShown() {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }

    onRender() {
    }

    private numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    onMoneyFormatterChange(e) {
        var valueString = e.target.value;

        //removing already existing commas before adding them
        valueString = valueString.replace(/,/g, '');

        var value = parseFloat(valueString);
        if (isNaN(value)) {
            e.target.value = "";
        } else {
            var numberWithCommas = this.numberWithCommas(value.toFixed(2));
            e.target.value = numberWithCommas;
        }
    }

    showValidationServerErrors(errors) {
        this.clearValidationErrors();
        this.model.validationError = {};
        for (var key in errors.ModelState) {            
            this.model.validationError[key] = errors.ModelState[key];

            this.addBootstrapValidationHtml(key);
            this.addErrorIcon(key);
        }
    }

    showValidationErrors() {

        this.clearValidationErrors();

        if (this.model === undefined) {
            console.log("showValidationErrors: Expected View model (undefined)");
        }
        if (this.model === null) {
            console.log("showValidationErrors: Expected View model (null)");
        }
        if (this.model.validationError === undefined) {
            console.log("showValidationErrors: Expected View validationError (undefined)");
        }
        if (this.model.validationError === null) {
            console.log("showValidationErrors: Expected View validationError (null)");
        }

        for (var key in this.model.validationError) {            
            this.addBootstrapValidationHtml(key);
            this.addErrorIcon(key);
        }
    }

    private addErrorIcon(key: string) {
        var idButtonKey = 'error-button-' + key;
        var controlElement = $(this.el).find("#" + key);
        var divHtml = "<div class='validation-wrapper'>";
        var iconHtml = "<div id='" + idButtonKey + "' class='validation-button'><i class='fa fa-exclamation-triangle'></i></div>";
        controlElement.wrap(divHtml);
        controlElement.after(iconHtml);

        var options = {
            //            title: "Validation for " + key,
            html: true,
            container: 'body',
            content: "<div class='width:100px;'>" + this.model.validationError[key] + "</div>",
            trigger: "hover",
            placement: "top",
            template: '<div class="popover" data-placement="top" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        };

        $('#' + idButtonKey).popover(options);
    }

    private addBootstrapValidationHtml(key: string) {
        var controlElement = $(this.el).find("#" + key);
        controlElement.closest(".form-group").addClass("has-error");        
    }

    clearValidationErrors() {
        var $form = $(this.el).find("form");

        $form.find(".help-inline").each(function () {
            // ReSharper disable once SuspiciousThisUsage
            $(this).remove();
        });

        $form.find(".has-error").removeClass("has-error");
        $form.find(".validation-button").first().unwrap();
        $form.find(".validation-button").remove();
    }
}