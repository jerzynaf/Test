import refRadio = require("backbone.radio");
import refRadioPageSvc = require("../RadioService/RadioPageService");
import refRadioNotifySvc = require("../RadioService/RadioNotificationService");

import refLandingPage = require("../../Pages/LandingPage/Mediator/Mediator");
import refMainFeedPage = require("../../Pages/MainFeedPage/Mediator/Mediator");



export class BasePageRouterService extends Marionette.Object {

    public baseRegion: Marionette.Region;
    private myChannel: Backbone.Radio.Channel;

    constructor(region: Marionette.Region) {
        super();
        this.baseRegion = region;
        this.setupMessageHandlers();
        console.log("****** create a page router");
    }


    onDestroy() {
        console.log("****  router being destroyed");
        this.stopListening();
    }

    setupMessageHandlers() {
        this.myChannel = refRadio.channel(refRadioPageSvc.RadioPageService.radioDefinition.name);

        this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showLandingPage, () => this.showLandingPage());
        this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showMainFeedPage, () => this.showMainFeedPage());


        //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFeed, () => this.showFeed());
        //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showBrowseMembers, () => this.showBrowseMembers());
        //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFriends, () => this.showFriends());
        //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showFollowers, () => this.showFollowers());
        //this.listenTo(this.myChannel, refRadioPageSvc.RadioPageService.radioDefinition.actions.showPhotos, () => this.showPhotos());
    }


    showLandingPage() {
        const mediator = new refLandingPage.Mediator(this.baseRegion);
    }

    showMainFeedPage() {
        const mediator = new refMainFeedPage.Mediator(this.baseRegion);
    }

    showFeed() {
        console.log("show feed");
    }

    showBrowseMembers() {
        console.log("show members");
    }

    showFriends() {
        console.log("show friends");
    }

    showFollowers() {
        console.log("show followers");
    }

    showPhotos() {
        console.log("show photos");
    }
}