(function() {

    angular.module('sportApp').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'src/view/home.view.html',
            controller: 'profileController',
        });

        $routeProvider.when('/profile', {
            templateUrl: 'src/view/profile.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.when('/broadcasts', {
            templateUrl: 'src/view/broadcasts.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.when('/list', {
           templateUrl: 'src/view/list.view.html',
            controller: 'listController',
        });

        $routeProvider.when('/list/:listId', {
            templateUrl: 'src/view/listId.view.html',
            controller: 'broadcastController',
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });
})();