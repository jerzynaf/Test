import refEnum = require("../../../Enums/SystemEnums");
import refBaseView = require("../../../BaseMarionette/BaseLayoutView");
import refLoginComponent = require("../../../Components/LoginComponent/Mediator/Mediator")
import refHeader = require("../../../Components/AppHeader/Mediator/Mediator");

export class LayoutView extends refBaseView.BaseLayoutView<Backbone.Model> {

    constructor(options?: any) {
        if (!options) options = {};
        options.template = super.loadTemplate("Pages/Landing/Layout");
        super(options);
    }



    onViewShown() {
        console.log("layout shown");
        this.setupRegions();
        this.showLoginComponent();
        this.displayHeader();

    }

    private displayHeader() {
        const region = this.getRegion("headerRegion");
        const menuApp = new refHeader.Mediator(region);
    }

    setupRegions() {
        this.addRegions({ loginRegion: ".login-region" });
        this.addRegions({ headerRegion: ".header-region" });
    }

    showLoginComponent() {
        var region = this.getRegion("loginRegion");
        var loginComponent = new refLoginComponent.Mediator(region);
    }

}