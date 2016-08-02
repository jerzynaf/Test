var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    "use strict";
    var MenuItemModel = (function (_super) {
        __extends(MenuItemModel, _super);
        function MenuItemModel(name, description, channel, action) {
            _super.call(this);
            this.set("name", name);
            this.set("description", description);
            this.set("channel", channel);
            this.set("action", action);
        }
        return MenuItemModel;
    }(Backbone.Model));
    exports.MenuItemModel = MenuItemModel;
});
//# sourceMappingURL=MenuItemModel.js.map