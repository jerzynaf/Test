var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseItemView"], function (require, exports, refBaseView) {
    "use strict";
    var HolidayRequestsView = (function (_super) {
        __extends(HolidayRequestsView, _super);
        function HolidayRequestsView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MyHolidaysApp/holidayRequests");
            options.events = {};
            _super.call(this, options);
        }
        HolidayRequestsView.prototype.onViewShown = function () {
        };
        //private onSaveButtonClicked(e) {
        //    e.preventDefault();
        //    refRadioPageService.RadioPageService.saveUserDetails();
        //}
        HolidayRequestsView.prototype.validateScreen = function () {
            //var data = Backbone.Syphon.serialize(this);
            //this.model.set(data);
            //this.clearValidationErrors();
            //if (!this.model.isValid()) {
            //    this.showValidationErrors();
            //    return false;
            //}
            return true;
        };
        return HolidayRequestsView;
    }(refBaseView.BaseItemView));
    exports.HolidayRequestsView = HolidayRequestsView;
});
//# sourceMappingURL=HolidayRequestsView.js.map