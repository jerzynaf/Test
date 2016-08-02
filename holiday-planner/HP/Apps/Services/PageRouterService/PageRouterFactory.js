define(["require", "exports", "../PageRouterService/BasePageRouterService"], function (require, exports, refBase) {
    "use strict";
    //
    // application router
    //
    var PageRouterFactory = (function () {
        function PageRouterFactory() {
        }
        PageRouterFactory.getRouter = function (baseRegion) {
            return new refBase.BasePageRouterService(baseRegion);
        };
        return PageRouterFactory;
    }());
    exports.PageRouterFactory = PageRouterFactory;
});
//# sourceMappingURL=PageRouterFactory.js.map