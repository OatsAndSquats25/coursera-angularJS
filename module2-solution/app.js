(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyingItem = function (itemIndex) {
            ShoppingListCheckOffService.addBoughtItems(toBuyList.items[itemIndex]);
            ShoppingListCheckOffService.removeToBuyItem(itemIndex);
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            {'name':'chips', quantity: 3},
            {'name':'carrot', quantity: 6},
            {'name':'steak', quantity: 2},
            {'name':'chicken', quantity: 1},
            {'name':'butter', quantity: '1 pound'},
            {'name':'milk', quantity: '4L'},
            {'name':'maple syrup', quantity: '1 can'},
            {'name':'waffle', quantity: 1}
        ];

        var boughtItems = [];

        service.removeToBuyItem = function (itemIndex) {
            toBuyItems.splice(itemIndex, 1);
        };

        service.addBoughtItems = function (item) {
            boughtItems.push(item);
        };


        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }

})();
