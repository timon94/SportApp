(function() {
    'use strict';

    angular.module('broadcasts.app').controller('broadcastsController', function($scope, Broadcasts) {
        Broadcasts.getData().then(function(value) {
           $scope.broadcastsData = value;
        });
    });
})();