(function() {

    angular.module('sportApp').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'src/view/home.view.html',
            controller: 'profileController',
        });

        $routeProvider.when('/profile', {
            templateUrl: 'src/view/messages.view.html',
            controller: 'profileController',
        });

        $routeProvider.when('/broadcasts', {
            templateUrl: 'src/view/broadcasts.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });
})();