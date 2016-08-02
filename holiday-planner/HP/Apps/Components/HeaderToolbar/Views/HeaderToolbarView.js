var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../BaseMarionette/BaseLayoutView", "../../../Services/RadioService/RadioPageService"], function (require, exports, refBaseView, refRadioPageService) {
    "use strict";
    var HeaderToolbarView = (function (_super) {
        __extends(HeaderToolbarView, _super);
        function HeaderToolbarView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "Components/HeaderToolbar/HeaderToolbar");
            options.events = {
                "click #MyHolidays": function () { _this.onMyHolidaysClicked(); },
                "click #Users": function () { _this.onUsersClicked(); }
            };
            //options.ui = {
            //    "#LeadId": "LeadId"
            //};
            _super.call(this, options);
        }
        HeaderToolbarView.prototype.onMyHolidaysClicked = function () {
            refRadioPageService.RadioPageService.showMyHolidaysPage();
        };
        HeaderToolbarView.prototype.onUsersClicked = function () {
            refRadioPageService.RadioPageService.showMaintainUsersPage();
        };
        return HeaderToolbarView;
    }(refBaseView.BaseLayoutView));
    exports.HeaderToolbarView = HeaderToolbarView;
});
//# sourceMappingURL=HeaderToolbarView.js.map