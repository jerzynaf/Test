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
    var UserListItemView = (function (_super) {
        __extends(UserListItemView, _super);
        function UserListItemView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MaintainUsersApp/userListItem");
            options.events = {
                "click": function () { _this.onUserSelected(); }
            };
            _super.call(this, options);
            this.listenTo(this.model, "change", this.onModelUpdated);
        }
        UserListItemView.prototype.onUserSelected = function () {
            this.trigger("user-selected", this.model);
        };
        UserListItemView.prototype.onViewShown = function () {
            //if (this.model.get("Show")) {
            //    this.$el.show();
            //} else {
            //    this.$el.hide();
            //}
        };
        UserListItemView.prototype.onModelUpdated = function (e) {
            if (this.model.get("Show")) {
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
        };
        return UserListItemView;
    }(refBaseView.BaseItemView));
    exports.UserListItemView = UserListItemView;
});
//# sourceMappingURL=UserListItemView.js.map