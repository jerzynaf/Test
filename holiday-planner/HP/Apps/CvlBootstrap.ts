import Marionette = require("backbone.marionette");

import refEnum = require("../Apps/Enums/SystemEnums")
import refNotificationSvc = require("../Apps/Services/NotificationService/NotificationService");
import refRadioPageSvc = require("../Apps/Services/RadioService/RadioPageService");
import refPageRouterFac = require("../Apps/Services/PageRouterService/PageRouterFactory");
import refPageRouterService = require("../Apps/Services/PageRouterService/BasePageRouterService");

export class CvlBootstrap extends Marionette.Application {


    private pageRouterService : refPageRouterService.BasePageRouterService;

    constructor() {
        super();       
        this.on("start", this.started);
    }


    started() {
        this.setupRegions();
        this.setupRouters();
        this.setupNotificationService();
        this.setupPageRouter();
        refRadioPageSvc.RadioPageService.showLandingPage();
    };    

    setupRegions() {
        this.addRegions({ baseRegion: '#base-region' });
    }

    setupNotificationService() {
        var svc = new refNotificationSvc.NotificationService();
    }

    setupPageRouter() {
        if (this.pageRouterService !== undefined) {
            this.pageRouterService.destroy();
        }
        var baseRegion = this.getRegion("baseRegion");
        this.pageRouterService = refPageRouterFac.PageRouterFactory.getRouter(baseRegion); 
    }

    setupRouters() {
        
        if (Backbone.history) {
            Backbone.history.start();
        }
    }
}