var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    "use strict";
    var UserAuthenticateModel = (function (_super) {
        __extends(UserAuthenticateModel, _super);
        function UserAuthenticateModel(username, password, options) {
            if (!options)
                options = {};
            _super.call(this, options);
            this.url = "api/authentication";
            this.set("username", username);
            this.set("password", password);
        }
        UserAuthenticateModel.prototype.isAuthenticated = function () {
            return this.get("Authenticated");
        };
        return UserAuthenticateModel;
    }(Backbone.Model));
    exports.UserAuthenticateModel = UserAuthenticateModel;
});
//# sourceMappingURL=AuthenticationModel.js.map