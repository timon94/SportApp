(function() {
    'use strict';

    angular.module('sportNews').service('News', function($http) {
        this.getSportNews = function() {
            return $http.get('api/sportNews.json').then(function(response) {
                return response.data;
            });
        };
    });
})();