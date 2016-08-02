import refRadio = require('backbone.radio');
import refBaseView = require("../../../BaseMarionette/BaseItemView");
import refItemModel = require("../Models/MenuItemModel");

export class MenuItemView extends refBaseView.BaseItemView<refItemModel.MenuItemModel> {
    constructor(options?: any) {
        if (!options) options = {};
    
        options.events = { "click": () => { this.itemClicked() } };
        options.template = super.loadTemplate("Components/MemberMenu/item");  
        super(options);
    }

    itemClicked() {
        const channel = this.model.get("channel");
        const action = this.model.get("action");
        if (channel !== undefined) {
            if (action !== undefined) {
                refRadio.channel(channel).trigger(action);  
            }
        }
    }
}