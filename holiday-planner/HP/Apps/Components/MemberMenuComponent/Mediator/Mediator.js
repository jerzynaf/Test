var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Models/MenuCollectionModel", "../Views/MenuCollectionView", "../../../Services/RadioService/RadioPageService"], function (require, exports, refCollectionModel, refCollectionView, refRadioPageSvc) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(region) {
            _super.call(this);
            var collectionModel = this.createMenuList();
            var collectionView = new refCollectionView.ListView({ collection: collectionModel });
            region.show(collectionView);
        }
        Mediator.prototype.createMenuList = function () {
            var collection = new refCollectionModel.MenuCollectionModel();
            collection.reset();
            var refPageSvc = refRadioPageSvc.RadioPageService.radioDefinition;
            //collection.add(new refItemModel.MenuItemModel("feed", "display activity feed", refPageSvc.name, refPageSvc.actions.showFeed));
            //collection.add(new refItemModel.MenuItemModel("browse", "browse members", refPageSvc.name, refPageSvc.actions.showBrowseMembers));
            //collection.add(new refItemModel.MenuItemModel("friends", "display my friends", refPageSvc.name, refPageSvc.actions.showFriends));
            //collection.add(new refItemModel.MenuItemModel("followers", "display my follers", refPageSvc.name, refPageSvc.actions.showFollowers));
            //collection.add(new refItemModel.MenuItemModel("photos", "display photos", refPageSvc.name, refPageSvc.actions.showPhotos));
            return collection;
        };
        return Mediator;
    }(Marionette.Object));
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map