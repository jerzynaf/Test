/// <reference path="../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseBackbone/BaseModel"], function (require, exports, refBaseModel) {
    "use strict";
    var ToolbarModel = (function (_super) {
        __extends(ToolbarModel, _super);
        function ToolbarModel(options) {
            if (!options)
                options = {};
            _super.call(this, options);
        }
        ToolbarModel.prototype.validate = function (attrs, options) {
        };
        return ToolbarModel;
    }(refBaseModel.BaseModel));
    exports.ToolbarModel = ToolbarModel;
});
//# sourceMappingURL=ToolbarModel.js.map