var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'backbone.radio', "../../../BaseMarionette/BaseItemView"], function (require, exports, refRadio, refBaseView) {
    "use strict";
    var MenuItemView = (function (_super) {
        __extends(MenuItemView, _super);
        function MenuItemView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.events = { "click": function () { _this.itemClicked(); } };
            options.template = _super.prototype.loadTemplate.call(this, "Components/MemberMenu/item");
            _super.call(this, options);
        }
        MenuItemView.prototype.itemClicked = function () {
            var channel = this.model.get("channel");
            var action = this.model.get("action");
            if (channel !== undefined) {
                if (action !== undefined) {
                    refRadio.channel(channel).trigger(action);
                }
            }
        };
        return MenuItemView;
    }(refBaseView.BaseItemView));
    exports.MenuItemView = MenuItemView;
});
//# sourceMappingURL=MenuItemView.js.map