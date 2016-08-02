import refBaseView = require("../../../BaseMarionette/BaseCompositeView");
import refItemModel = require("../Models/MenuItemModel");
import refItemView = require("../Views/MenuItemView");
import refCollectionModel = require("../Models/MenuCollectionModel");

export class ListView extends refBaseView.BaseCompositeView<refItemModel.MenuItemModel, refItemView.MenuItemView> {
    constructor(options?: any) {

        if (!options) options = {};

        options.template = super.loadTemplate("Components/MemberMenu/list");         
        super(options);

        this.childView = refItemView.MenuItemView;
        this.childViewContainer = '#menu-list';
    }

    onViewShown() {

    }
}