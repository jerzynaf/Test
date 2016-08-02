var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Views/HeaderView"], function (require, exports, refHeaderView) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(region) {
            _super.call(this);
            var view = new refHeaderView.HeaderView();
            region.show(view);
        }
        return Mediator;
    }(Marionette.Object));
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map