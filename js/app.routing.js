(function() {

    angular.module('sportApp').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'src/view/broadcasts.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.when('/profile', {
            templateUrl: 'src/view/profile.view.html',
            controller: 'profileController',
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });
})();