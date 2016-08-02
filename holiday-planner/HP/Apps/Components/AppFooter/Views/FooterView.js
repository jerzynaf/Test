var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView"], function (require, exports, refBaseView) {
    "use strict";
    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/AppFooter/Footer");
            _super.call(this, options);
        }
        return FooterView;
    }(refBaseView.BaseLayoutView));
    exports.FooterView = FooterView;
});
//# sourceMappingURL=FooterView.js.map