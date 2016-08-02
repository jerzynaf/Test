import refItemModel = require("../Models/MenuItemModel");
import refCollectionModel = require("../Models/MenuCollectionModel");
import refCollectionView = require("../Views/MenuCollectionView");
import refRadioPageSvc = require("../../../Services/RadioService/RadioPageService");


export class Mediator extends Marionette.Object {

    constructor(region: Marionette.Region) {
        super();

        const collectionModel = this.createMenuList();
        const collectionView = new refCollectionView.ListView({ collection: collectionModel });
        region.show(collectionView);

    }

    private createMenuList() : refCollectionModel.MenuCollectionModel {

        var collection = new refCollectionModel.MenuCollectionModel();
        collection.reset();

        var refPageSvc = refRadioPageSvc.RadioPageService.radioDefinition;

        //collection.add(new refItemModel.MenuItemModel("feed", "display activity feed", refPageSvc.name, refPageSvc.actions.showFeed));
        //collection.add(new refItemModel.MenuItemModel("browse", "browse members", refPageSvc.name, refPageSvc.actions.showBrowseMembers));
        //collection.add(new refItemModel.MenuItemModel("friends", "display my friends", refPageSvc.name, refPageSvc.actions.showFriends));
        //collection.add(new refItemModel.MenuItemModel("followers", "display my follers", refPageSvc.name, refPageSvc.actions.showFollowers));
        //collection.add(new refItemModel.MenuItemModel("photos", "display photos", refPageSvc.name, refPageSvc.actions.showPhotos));

        return collection;
    }
}