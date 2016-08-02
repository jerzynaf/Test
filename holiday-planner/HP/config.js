requirejs.config({
    baseUrl: "",
    paths: {
        'jquery': "lib/jquery/dist/jquery",
        'jquery-ui': 'lib/jquery-ui/jquery-ui',
        'underscore': "lib/underscore/underscore",
        'backbone': "lib/backbone/backbone",
        'backbone.radio': "lib/backbone.radio/build/backbone.radio",
        'backbone.syphon': "lib/backbone.syphon/lib/backbone.syphon",
        'handlebars': "lib/handlebars/handlebars",
        'backbone.marionette': "lib/marionette/lib/backbone.marionette",
        'bootstrap': "lib/bootstrap/dist/js/bootstrap",
        'marionette': "lib/marionette/lib/backbone.marionette",
        'toastr': "lib/toastr/toastr",
        "moment": "lib/moment/moment"
    },
    shim: {
        'underscore': {
            exports: "_"
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery', 'jquery-ui', 'bootstrap', 'moment'],
            exports: "Backbone"
        },
        'backbone.syphon': {
            exports: "backbone.syphon"
        },
        'backbone.radio': {
            deps: ['underscore', 'backbone.syphon'],
            exports: "Backbone.Radio"
        },
        'marionette': {
            deps: ["Backbone.Radio", "toastr", "backbone", "handlebars"]
        }
    }
});
//# sourceMappingURL=config.js.map