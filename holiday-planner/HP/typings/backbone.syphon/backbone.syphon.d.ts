// Type definitions for Backbone.Radio v0.8.3
// Project: https://github.com/marionettejs/backbone.radio
// Definitions by: Peter Palotas <https://github.com/alphaleonis/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Backbone {
    class Syphon {
        static serialize(view: Backbone.View<Backbone.Model>): any;
    }    
} 

declare module 'backbone.syphon' {    
    export = Backbone.Syphon;
}