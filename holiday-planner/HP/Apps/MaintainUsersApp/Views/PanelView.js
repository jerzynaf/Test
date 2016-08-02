/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseCompositeView", "../Views/UserListItemView"], function (require, exports, refBaseView, refUserItemView) {
    "use strict";
    var PanelView = (function (_super) {
        __extends(PanelView, _super);
        function PanelView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MaintainUsersApp/panel");
            _super.call(this, options);
            this.ui = {
                filter: "#filter"
            };
            this.childView = refUserItemView.UserListItemView;
            this.childViewContainer = '#user-list';
        }
        PanelView.prototype.refresh = function () {
            this.collection.fetch();
        };
        return PanelView;
    }(refBaseView.BaseCompositeView));
    exports.PanelView = PanelView;
});
//# sourceMappingURL=PanelView.js.map