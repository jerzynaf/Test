/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseMarionette/TemplateLoader", "backbone.marionette"], function (require, exports, refTemplateHelper, Marionette) {
    "use strict";
    var BaseCollectionView = (function (_super) {
        __extends(BaseCollectionView, _super);
        function BaseCollectionView(options) {
            _super.call(this, options);
            this.on("show", this.onViewShown);
        }
        BaseCollectionView.prototype.loadTemplate = function (name) {
            var template = refTemplateHelper.TemplateHelper.loadTemplate(name);
            return template;
        };
        BaseCollectionView.prototype.onViewShown = function () {
        };
        return BaseCollectionView;
    }(Marionette.CollectionView));
    exports.BaseCollectionView = BaseCollectionView;
});
//# sourceMappingURL=BaseCollectionView.js.map