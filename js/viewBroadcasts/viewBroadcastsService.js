(function() {
    angular.module('viewBroadcastsModule').service('viewBroadcastsService', function($http) {
        this.getData = function() {
           return $http.get('api/data.json').then(function(response){
                return response.data;
            });
        };
    });
})();
