var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone", "../Models/MenuItemModel"], function (require, exports, Backbone, refItemModel) {
    "use strict";
    var MenuCollectionModel = (function (_super) {
        __extends(MenuCollectionModel, _super);
        function MenuCollectionModel(options) {
            if (!options)
                options = {};
            MenuCollectionModel.prototype.model = refItemModel.MenuItemModel;
            _super.call(this, options);
        }
        return MenuCollectionModel;
    }(Backbone.Collection));
    exports.MenuCollectionModel = MenuCollectionModel;
});
//# sourceMappingURL=MenuCollectionModel.js.map