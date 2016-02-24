(function() {
    'use strict';

    angular.module('broadcasts').controller('broadcastController', function($scope, Broadcast) {
        Broadcast.getData().then(function(value) {
            $scope.broadcastData = value;
        });
    });
})();