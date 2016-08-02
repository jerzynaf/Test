/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>


//import Handlebars = require("handlebars");
import Marionette = require("backbone.marionette");
import refTemplateHelper = require("../BaseMarionette/TemplateLoader");
import refEnum = require("../Enums/SystemEnums");
       
export class BaseLayoutView<TModel extends Backbone.Model> extends Marionette.LayoutView<TModel> 
{

    constructor(options?: Backbone.ViewOptions<TModel>) {
        super(options);
        this.on("show", this.onViewShown);       
    }

    loadTemplate(name: string): HandlebarsTemplateDelegate {
        var template = refTemplateHelper.TemplateHelper.loadTemplate(name);
        return template;
    }

    loadTemplateForDevice(deviceType: refEnum.DeviceType, name: string) : HandlebarsTemplateDelegate {
        var path: string;
        switch (deviceType) {
            case refEnum.DeviceType.Mobile:
                path = "Mobile/" + name;
                break;

            case refEnum.DeviceType.Tablet:
                path = "Tablet/" + name;
                break;

            case refEnum.DeviceType.Desktop:
                path = "Desktop/" + name;
                break;

            default:
                path = "Universal/" + name;
                break;
        }
        return this.loadTemplate(path);
    }

    onViewShown() {
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

        console.log("Displaying validation errors");

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
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        };

        $('#' + idButtonKey).popover(options);
    }

    private addBootstrapValidationHtml(key: string) {
        var controlElement = $(this.el).find("#" + key);

        controlElement.closest(".form-group").addClass("has-error");

        // this adds new span to display error, not needed with error icon and popover
        //var errorHtml = `<span class='help-inline help-block has-error'>${this.model.validationError[key]}</span>`;
        //controlElement.after(errorHtml);
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