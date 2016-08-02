/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    "use strict";
    var UserListItemModel = (function (_super) {
        __extends(UserListItemModel, _super);
        function UserListItemModel(options) {
            if (!options)
                options = {};
            _super.call(this, options);
        }
        return UserListItemModel;
    }(Backbone.Model));
    exports.UserListItemModel = UserListItemModel;
});
//# sourceMappingURL=UserListItemModel.js.map