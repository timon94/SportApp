(function () {
    'use strict';

    angular.module('broadcasts').controller('broadcastsController', function ($scope, Broadcasts) {
        Broadcasts.getData().then(function (value) {
            $scope.broadcastsData = value;
        });
    });
})();