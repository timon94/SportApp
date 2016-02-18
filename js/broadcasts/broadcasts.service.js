(function() {
    'use strict';

    angular.module('broadcasts.app').service('Broadcasts', function($http) {
        this.getData = function() {
           return $http.get('api/data.json').then(function(response) {
                return response.data;
            });
        };
    });
})();
