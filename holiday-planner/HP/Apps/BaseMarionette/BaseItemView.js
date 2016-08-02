/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "handlebars", "backbone.marionette", "../BaseMarionette/TemplateLoader"], function (require, exports, Handlebars, Marionette, refTemplateHelper) {
    "use strict";
    var BaseItemView = (function (_super) {
        __extends(BaseItemView, _super);
        function BaseItemView(options) {
            _super.call(this, options);
            this.on("show", this.onViewShown);
            this.on("render", this.onRender);
            Handlebars.registerHelper('ifCond', function (v1, v2, options) {
                if (v1 === v2) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
        }
        BaseItemView.prototype.loadTemplate = function (name) {
            var template = refTemplateHelper.TemplateHelper.loadTemplate(name);
            return template;
        };
        BaseItemView.prototype.onViewShown = function () {
            $('[data-toggle="popover"]').popover();
            $('[data-toggle="tooltip"]').tooltip();
        };
        BaseItemView.prototype.onRender = function () {
        };
        BaseItemView.prototype.numberWithCommas = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        BaseItemView.prototype.onMoneyFormatterChange = function (e) {
            var valueString = e.target.value;
            //removing already existing commas before adding them
            valueString = valueString.replace(/,/g, '');
            var value = parseFloat(valueString);
            if (isNaN(value)) {
                e.target.value = "";
            }
            else {
                var numberWithCommas = this.numberWithCommas(value.toFixed(2));
                e.target.value = numberWithCommas;
            }
        };
        BaseItemView.prototype.showValidationServerErrors = function (errors) {
            this.clearValidationErrors();
            this.model.validationError = {};
            for (var key in errors.ModelState) {
                this.model.validationError[key] = errors.ModelState[key];
                this.addBootstrapValidationHtml(key);
                this.addErrorIcon(key);
            }
        };
        BaseItemView.prototype.showValidationErrors = function () {
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
        };
        BaseItemView.prototype.addErrorIcon = function (key) {
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
        };
        BaseItemView.prototype.addBootstrapValidationHtml = function (key) {
            var controlElement = $(this.el).find("#" + key);
            controlElement.closest(".form-group").addClass("has-error");
        };
        BaseItemView.prototype.clearValidationErrors = function () {
            var $form = $(this.el).find("form");
            $form.find(".help-inline").each(function () {
                // ReSharper disable once SuspiciousThisUsage
                $(this).remove();
            });
            $form.find(".has-error").removeClass("has-error");
            $form.find(".validation-button").first().unwrap();
            $form.find(".validation-button").remove();
        };
        return BaseItemView;
    }(Marionette.ItemView));
    exports.BaseItemView = BaseItemView;
});
//# sourceMappingURL=BaseItemView.js.map