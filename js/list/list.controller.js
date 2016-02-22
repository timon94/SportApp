(function () {
    'use strict';

    angular.module('list').controller('listController', function ($scope, List) {
        List.getData().then(function(value) {
            $scope.broadcastsData = value;
        });
    });
})();