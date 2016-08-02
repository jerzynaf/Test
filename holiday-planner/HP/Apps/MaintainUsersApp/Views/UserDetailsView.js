var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../BaseMarionette/BaseItemView"], function (require, exports, refBaseView) {
    "use strict";
    var UserDetailsView = (function (_super) {
        __extends(UserDetailsView, _super);
        function UserDetailsView(options) {
            if (!options)
                options = {};
            options.template = _super.prototype.loadTemplate.call(this, "MaintainUsersApp/userDetails");
            options.events = {};
            _super.call(this, options);
        }
        UserDetailsView.prototype.onViewShown = function () {
            $("#RoleEnabled").val(this.model.get("RoleEnabled").toString());
            $("#RoleId").val(this.model.get("RoleId"));
            $("#btnSave").show();
        };
        //private onSaveButtonClicked(e) {
        //    e.preventDefault();
        //    refRadioPageService.RadioPageService.saveUserDetails();
        //}
        UserDetailsView.prototype.validateScreen = function () {
            var data = Backbone.Syphon.serialize(this);
            this.model.set(data);
            this.clearValidationErrors();
            if (!this.model.isValid()) {
                this.showValidationErrors();
                return false;
            }
            return true;
        };
        return UserDetailsView;
    }(refBaseView.BaseItemView));
    exports.UserDetailsView = UserDetailsView;
});
//# sourceMappingURL=UserDetailsView.js.map