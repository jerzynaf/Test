var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView"], function (require, exports, refBaseView) {
    "use strict";
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/AppHeader/Header");
            _super.call(this, options);
        }
        return HeaderView;
    }(refBaseView.BaseLayoutView));
    exports.HeaderView = HeaderView;
});
//# sourceMappingURL=HeaderView.js.map