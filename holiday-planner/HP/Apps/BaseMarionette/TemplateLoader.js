define(["require", "exports", "handlebars"], function (require, exports, Handlebars) {
    "use strict";
    var TemplateHelper = (function () {
        function TemplateHelper() {
        }
        TemplateHelper.loadTemplate = function (name) {
            if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
                $.ajax({
                    url: 'Templates/' + name + '.html',
                    success: function (data) {
                        if (Handlebars.templates === undefined) {
                            Handlebars.templates = {};
                        }
                        Handlebars.templates[name] = Handlebars.compile(data);
                    },
                    async: false
                });
            }
            return Handlebars.templates[name];
        };
        return TemplateHelper;
    }());
    exports.TemplateHelper = TemplateHelper;
});
//# sourceMappingURL=TemplateLoader.js.map