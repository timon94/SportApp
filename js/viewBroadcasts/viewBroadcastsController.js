(function(){
    angular.module('viewBroadcastsModule').controller('viewBroadcastsController', function(viewBroadcastsService, $scope) {
        viewBroadcastsService.getData().then(function(value) {
           $scope.transl = value;
        });
    });
})();