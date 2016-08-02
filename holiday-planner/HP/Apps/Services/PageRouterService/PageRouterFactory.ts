import refEnum = require("../../Enums/SystemEnums")
import refBase = require("../PageRouterService/BasePageRouterService")


//
// application router
//
export class PageRouterFactory {

    public static getRouter(baseRegion: Marionette.Region): refBase.BasePageRouterService {

        return new refBase.BasePageRouterService(baseRegion);

    }
}