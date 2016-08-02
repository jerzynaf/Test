/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    "use strict";
    var UserListCollectionModel = (function (_super) {
        __extends(UserListCollectionModel, _super);
        function UserListCollectionModel(options) {
            if (!options)
                options = {};
            _super.call(this, options);
            this.url = "api/user/all";
        }
        return UserListCollectionModel;
    }(Backbone.Collection));
    exports.UserListCollectionModel = UserListCollectionModel;
});
//# sourceMappingURL=UserListCollectionModel.js.map