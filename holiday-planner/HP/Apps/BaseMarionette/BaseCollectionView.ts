/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <reference path="../../typings/handlebars/handlebars.d.ts"/>


import refTemplateHelper = require("../BaseMarionette/TemplateLoader");
import Marionette = require("backbone.marionette");



export class BaseCollectionView<TModel extends Backbone.Model, TView extends Marionette.View<Backbone.Model>>
    extends Marionette.CollectionView<TModel, TView> 
{

    constructor(options?: Backbone.ViewOptions<TModel>) {
        super(options);
        this.on("show", this.onViewShown);
    }

    loadTemplate(name: string): HandlebarsTemplateDelegate {
        var template =  refTemplateHelper.TemplateHelper.loadTemplate(name);
        return template;
    }
    
    onViewShown() {
    }
}