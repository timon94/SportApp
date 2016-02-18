(function() {
    'use strict';

    angular.module('sportApp').controller('displayElemController', function($scope, TagNavBar) {
        $scope.tagsHeader = TagNavBar.getTags();
    });
})();