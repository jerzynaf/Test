var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseCompositeView", "../Views/MenuItemView"], function (require, exports, refBaseView, refItemView) {
    "use strict";
    var ListView = (function (_super) {
        __extends(ListView, _super);
        function ListView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/MemberMenu/list");
            _super.call(this, options);
            this.childView = refItemView.MenuItemView;
            this.childViewContainer = '#menu-list';
        }
        ListView.prototype.onViewShown = function () {
        };
        return ListView;
    }(refBaseView.BaseCompositeView));
    exports.ListView = ListView;
});
//# sourceMappingURL=MenuCollectionView.js.map