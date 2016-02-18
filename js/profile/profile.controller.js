(function() {
    'use strict';

    angular.module('profile').controller('profileController', function($scope) {
        var activeCurrentPage = 'profile';

        $scope.isActiveProfile = function(page) {
            return page === activeCurrentPage;
        };

        $scope.setActivePage = function(page) {
            activeCurrentPage = page;
        }
    });
})();