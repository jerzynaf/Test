import refBaseView = require("../../../BaseMarionette/BaseLayoutView");

export class FooterView extends refBaseView.BaseLayoutView<Backbone.Model> {

    constructor(options?: any) {
        if (!options) options = {};

        options.template = super.loadTemplate("Components/AppFooter/Footer");

        super(options);
    }

}