/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../components/Template/TemplateLoader", "../../BaseItems/BaseItemView"], function (require, exports, refTemplate, refBaseView) {
    "use strict";
    var ToolbarView = (function (_super) {
        __extends(ToolbarView, _super);
        function ToolbarView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = refTemplate.TemplateHelper.loadTemplate("MaintainUsersApp/toolbar");
            options.events = {
                "click #btnSave": function () { _this.onSaveClicked(); },
                "click #btnDisable": function () { _this.onDisableClicked(); },
                "click #btnEnable": function () { _this.onEnableClicked(); },
                "click #btnReset": function () { _this.onResetPasswordClicked(); }
            };
            _super.call(this, options);
        }
        ToolbarView.prototype.onSaveClicked = function () {
            this.trigger("save");
        };
        ToolbarView.prototype.onDisableClicked = function () {
            this.trigger("disable");
        };
        ToolbarView.prototype.onEnableClicked = function () {
            this.trigger("enable");
        };
        ToolbarView.prototype.onResetPasswordClicked = function () {
            this.trigger("resetPassword");
        };
        return ToolbarView;
    }(refBaseView.BaseItemView));
    exports.ToolbarView = ToolbarView;
});
//# sourceMappingURL=ToolbarView.js.map