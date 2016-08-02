import Backbone = require("backbone");

export class UserAuthenticateModel extends Backbone.Model {

    constructor(username: string, password: string, options?: any) {
        if (!options)
            options = {};
        
        super(options);

        this.url = "api/authentication";
        this.set("username", username);
        this.set("password", password);
    }


    isAuthenticated(): boolean {
        return this.get("Authenticated");
    }
}