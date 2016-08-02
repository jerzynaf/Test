/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../../typings/backbone.radio/backbone.radio.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../components/Template/TemplateLoader", "../../RadioHelper/RadioHelper", "../../BaseItems/BaseLayoutView", "../Views/UserDetailsView", "../Views/ToolbarView", "../../components/TickList/Mediator/Mediator", "../../components/DualSelectorList/Mediator/Mediator", "../../Components/StandardDialogs/StandardDialogHelper", "../../Components/SystemEnums", "../Models/NewPasswordModel"], function (require, exports, refTemplate, refRadioHelper, refBaseView, refUserDetailsView, refToolBarView, refComponentTickList, refComponentDualSelector, refStandardDialogs, systemEnums, refNewPasswordModel) {
    "use strict";
    var DetailLayoutView = (function (_super) {
        __extends(DetailLayoutView, _super);
        function DetailLayoutView(options) {
            if (!options)
                options = {};
            options.template = refTemplate.TemplateHelper.loadTemplate("MaintainUsersApp/detailLayout");
            _super.call(this, options);
        }
        DetailLayoutView.prototype.onViewShown = function () {
            this.registerRegions();
            this.showUserDetailsView();
            this.showToolbarView();
            this.showRoles();
            this.showTeamMembers();
        };
        DetailLayoutView.prototype.registerRegions = function () {
            this.addRegions({ regionUserDetails: '.region-user-details' });
            this.addRegions({ regionRoles: '.region-roles' });
            this.addRegions({ regionTeamUsAssigned: '.region-teams-assigned' });
            this.addRegions({ regionTeamsAvailable: '.region-teams-available' });
            this.addRegions({ regionToolBar: '.region-toolbar' });
        };
        DetailLayoutView.prototype.showRoles = function () {
            var data = this.model.get("Roles");
            var region = this.getRegion("regionRoles");
            this.rolesComponent = new refComponentTickList.Mediator("Roles", region, data);
        };
        DetailLayoutView.prototype.showTeamMembers = function () {
            var regionSelected = this.getRegion("regionTeamUsAssigned");
            var regionAvailable = this.getRegion("regionTeamsAvailable");
            this.teamMembersComponent = new refComponentDualSelector.Mediator("Assigned Teams", "Available Teams", regionSelected, regionAvailable, this.model.get("TeamsForUser"), this.model.get("TeamsAvailable"));
        };
        DetailLayoutView.prototype.showUserDetailsView = function () {
            this.userDetailsView = new refUserDetailsView.UserDetailsView({ model: this.model });
            var region = this.getRegion("regionUserDetails");
            region.show(this.userDetailsView);
        };
        DetailLayoutView.prototype.showToolbarView = function () {
            this.toolbarView = new refToolBarView.ToolbarView({ model: this.model });
            var region = this.getRegion("regionToolBar");
            this.listenTo(this.toolbarView, "save", this.onSaveClicked);
            this.listenTo(this.toolbarView, "disable", this.onDisableClicked);
            this.listenTo(this.toolbarView, "enable", this.onEnableClicked);
            this.listenTo(this.toolbarView, "resetPassword", this.onResetPasswordClicked);
            region.show(this.toolbarView);
        };
        DetailLayoutView.prototype.onSaveClicked = function () {
            this.saveRecord();
            this.trigger("clear-search-input");
        };
        DetailLayoutView.prototype.onDisableClicked = function () {
            var _this = this;
            var helper = new refStandardDialogs.StandardDialogHelper();
            helper.showGeneric(systemEnums.DialogType.YesNo, "Disable User", "Are you sure you wish to DISABLE this user?", function (response) { return _this.onDisableCallback(response); });
        };
        DetailLayoutView.prototype.onEnableClicked = function () {
            var _this = this;
            var helper = new refStandardDialogs.StandardDialogHelper();
            helper.showGeneric(systemEnums.DialogType.YesNo, "Enable User", "Are you sure you wish to ENABLE this user?", function (response) { return _this.onEnabledCallback(response); });
        };
        DetailLayoutView.prototype.onResetPasswordClicked = function () {
            var _this = this;
            var newPasswordModel = new refNewPasswordModel.NewPasswordModel();
            newPasswordModel.fetch().then(function () {
                _this.model.set("Password", newPasswordModel.get("Password"));
                var helper = new refStandardDialogs.StandardDialogHelper();
                var msg = "The new password for this user is" +
                    "<h3>"
                    + _this.model.get("Password")
                    + "</h3>" +
                    "<br>You must save the user to apply this change.";
                helper.showGeneric(systemEnums.DialogType.Info, "New Password", msg, function (response) { return _this.onResetPasswordCallback(response); });
            });
        };
        DetailLayoutView.prototype.onDisableCallback = function (response) {
            if (response === systemEnums.DialogResponse.Yes) {
                this.model.set("Enabled", false);
                this.userDetailsView.render();
                this.toolbarView.render();
            }
        };
        DetailLayoutView.prototype.onEnabledCallback = function (response) {
            if (response === systemEnums.DialogResponse.Yes) {
                this.model.set("Enabled", true);
                this.userDetailsView.render();
                this.toolbarView.render();
            }
        };
        DetailLayoutView.prototype.onResetPasswordCallback = function (response) {
        };
        DetailLayoutView.prototype.saveRecord = function () {
            if (this.model.get("HasPassword") === false) {
                if (this.model.get("Password") !== "") {
                    this.model.set("HasPassword", true);
                    this.toolbarView.render();
                }
            }
            var data = Backbone.Syphon.serialize(this.userDetailsView);
            this.model.set("UserName", null);
            this.model.set("Forename", null);
            this.model.set("Surname", null);
            this.model.set(data);
            this.model.convertMoneyToPence();
            this.model.set("Roles", this.rolesComponent.getSelectedKeys("RoleId"));
            this.model.set("TeamsForUser", this.teamMembersComponent.getSelectedKeys("TeamId"));
            this.userDetailsView.clearValidationErrors();
            var self = this;
            if (this.model.save(null, {
                validate: true,
                success: function (model, response) {
                    self.userDetailsView.clearValidationErrors();
                    self.trigger("refresh-user-list");
                    refRadioHelper.RadioHelper.notifySuccess("Maintain Users", "Save User Details");
                },
                error: function (model, response) {
                    if (response.status === 400) {
                        self.userDetailsView.showValidationServerErrors(response.responseJSON);
                        refRadioHelper.RadioHelper.notifyError("Maintain Users", "Please correct validation errors");
                        return;
                    }
                    self.userDetailsView.showValidationErrors();
                    refRadioHelper.RadioHelper.notifyError("Maintain Users", "Can not save at this time<br>." + response.statusText + " (" + response.status + ")");
                }
            }) === false) {
                refRadioHelper.RadioHelper.notifyWarning("Maintain Users", "Please correct validation errors");
                self.userDetailsView.showValidationErrors();
            }
        };
        return DetailLayoutView;
    }(refBaseView.BaseLayoutView));
    exports.DetailLayoutView = DetailLayoutView;
});
//# sourceMappingURL=DetailLayoutView.js.map