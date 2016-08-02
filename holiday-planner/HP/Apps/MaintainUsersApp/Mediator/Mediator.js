var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette", "../Views/LayoutView"], function (require, exports, Marionette, refLayoutView) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(region) {
            _super.call(this);
            this.layoutView = new refLayoutView.LayoutView();
            region.show(this.layoutView);
        }
        return Mediator;
    }(Marionette.Object));
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map