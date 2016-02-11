(function(){
    angular.module('viewTranlationsModule').controller('viewTranslationsController', function(viewTranslationsService, $scope) {
        viewTranslationsService.getData().then(function(value) {
           $scope.transl = value;
        });
    });
})();