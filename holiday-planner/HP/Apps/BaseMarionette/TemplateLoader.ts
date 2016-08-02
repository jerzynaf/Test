import Handlebars = require("handlebars");

export class TemplateHelper {
    
    static loadTemplate(name: string): HandlebarsTemplateDelegate {
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            $.ajax({
                url: 'Templates/' + name + '.html',
                success: function (data : any) {
                    if (Handlebars.templates === undefined) {
                        Handlebars.templates = {};
                    }
                    Handlebars.templates[name] = Handlebars.compile(data);
                },
                async: false
            });
        }
        return Handlebars.templates[name];
    }

}