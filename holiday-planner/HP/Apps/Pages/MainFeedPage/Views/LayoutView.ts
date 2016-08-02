import refBaseView = require("../../../BaseMarionette/BaseLayoutView");
import refMemberMenu = require("../../../Components/MemberMenuComponent/Mediator/Mediator");
import refHeader = require("../../../Components/AppHeader/Mediator/Mediator");
import refFooter = require("../../../Components/AppFooter/Mediator/Mediator");
import refRadio = require("backbone.radio");
import refRadioPageService = require("../../../Services/RadioService/RadioPageService");
import refMaintainUsers = require("../../../MaintainUsersApp/Mediator/Mediator");
import refMyHolidays = require("../../../MyHolidaysApp/Mediator/Mediator");

export class LayoutView extends refBaseView.BaseLayoutView<Backbone.Model> {

    private myPageChannel: Backbone.Radio.Channel;

    constructor(options?: any) {
        if (!options) options = {};
        options.template = super.loadTemplate("Pages/MainFeed/Layout");
        super(options);
    }

    private setupMessageHandlers() {
        this.myPageChannel = refRadio.channel(refRadioPageService.RadioPageService.radioDefinition.name);

        this.listenTo(this.myPageChannel,
            refRadioPageService.RadioPageService.radioDefinition.actions.showMyHolidays,
            () => this.showMyHolidaysPage());
    }

    onViewShown() {
        this.setupRegions();
        this.displayHeader();
        //this.displayFooter();
        this.showMyHolidaysPage();
        this.setupMessageHandlers();
    }

    private displayFooter() {
        const region = this.getRegion("footerRegion");
        const menuApp = new refFooter.Mediator(region);
    }

    private displayHeader() {
        const region = this.getRegion("headerRegion");
        const menuApp = new refHeader.Mediator(region);
    }

    private setupRegions() {
        this.addRegions({ headerRegion: ".header-region" });
        this.addRegions({ feedRegion: ".feed-region" });
        //this.addRegions({ footerRegion: ".footer-region" });
    }

    private showMyHolidaysPage() {
        const region = this.getRegion("feedRegion");
        const myHolidaysApp = new refMyHolidays.Mediator(region);
    }
}