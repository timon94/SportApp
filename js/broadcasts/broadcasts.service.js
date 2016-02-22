(function() {
    'use strict';

    angular.module('broadcasts').service('Broadcasts', function($http) {
        this.getData = function() {
                return $http.get('api/data.json');
        };
    });
})();
