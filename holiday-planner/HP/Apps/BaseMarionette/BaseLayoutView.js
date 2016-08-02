/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette", "../BaseMarionette/TemplateLoader", "../Enums/SystemEnums"], function (require, exports, Marionette, refTemplateHelper, refEnum) {
    "use strict";
    var BaseLayoutView = (function (_super) {
        __extends(BaseLayoutView, _super);
        function BaseLayoutView(options) {
            _super.call(this, options);
            this.on("show", this.onViewShown);
        }
        BaseLayoutView.prototype.loadTemplate = function (name) {
            var template = refTemplateHelper.TemplateHelper.loadTemplate(name);
            return template;
        };
        BaseLayoutView.prototype.loadTemplateForDevice = function (deviceType, name) {
            var path;
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
        };
        BaseLayoutView.prototype.onViewShown = function () {
        };
        BaseLayoutView.prototype.showValidationErrors = function () {
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
        };
        BaseLayoutView.prototype.addErrorIcon = function (key) {
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
        };
        BaseLayoutView.prototype.addBootstrapValidationHtml = function (key) {
            var controlElement = $(this.el).find("#" + key);
            controlElement.closest(".form-group").addClass("has-error");
            // this adds new span to display error, not needed with error icon and popover
            //var errorHtml = `<span class='help-inline help-block has-error'>${this.model.validationError[key]}</span>`;
            //controlElement.after(errorHtml);
        };
        BaseLayoutView.prototype.clearValidationErrors = function () {
            var $form = $(this.el).find("form");
            $form.find(".help-inline").each(function () {
                // ReSharper disable once SuspiciousThisUsage
                $(this).remove();
            });
            $form.find(".has-error").removeClass("has-error");
            $form.find(".validation-button").first().unwrap();
            $form.find(".validation-button").remove();
        };
        return BaseLayoutView;
    }(Marionette.LayoutView));
    exports.BaseLayoutView = BaseLayoutView;
});
//# sourceMappingURL=BaseLayoutView.js.map