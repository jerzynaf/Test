/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseItemView"], function (require, exports, refBaseView) {
    "use strict";
    var ListItemView = (function (_super) {
        __extends(ListItemView, _super);
        function ListItemView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MyHolidaysApp/userListItem");
            options.events = {
                "click": function () { _this.onUserSelected(); }
            };
            _super.call(this, options);
            this.listenTo(this.model, "change", this.onModelUpdated);
        }
        ListItemView.prototype.onUserSelected = function () {
            this.trigger("user-selected", this.model);
        };
        ListItemView.prototype.onViewShown = function () {
            //if (this.model.get("Show")) {
            //    this.$el.show();
            //} else {
            //    this.$el.hide();
            //}
        };
        ListItemView.prototype.onModelUpdated = function (e) {
            if (this.model.get("Show")) {
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
        };
        return ListItemView;
    }(refBaseView.BaseItemView));
    exports.ListItemView = ListItemView;
});
//# sourceMappingURL=ListItemView.js.map