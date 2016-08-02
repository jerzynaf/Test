/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseItemView"], function (require, exports, refBaseView) {
    "use strict";
    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MyHolidaysApp/footer");
            options.events = {
                "click #btnRequest": function () { _this.onRequestButtonClicked(); }
            };
            _super.call(this, options);
        }
        FooterView.prototype.onRequestButtonClicked = function () {
            //refRadioPageService.RadioPageService.saveUserDetails();
            console.log("Making a new request is not implemented yet!");
        };
        FooterView.prototype.onViewShown = function () {
        };
        return FooterView;
    }(refBaseView.BaseItemView));
    exports.FooterView = FooterView;
});
//# sourceMappingURL=FooterView.js.map