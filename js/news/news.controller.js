(function() {
    'use strict';

    angular.module('sportNews').controller('newsController', function($scope, News) {
       News.getSportNews().then(function(value) {
          $scope.sportNews = value;
       });
    });
})();