(function() {

    angular.module('sportApp').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'src/app/view/home.view.html',
            controller: 'profileController',
        });

        $routeProvider.when('/profile', {
            templateUrl: 'src/profile/profile.view/profile.view.html',
            controller: 'profileController',
        });

        $routeProvider.when('/broadcasts', {
            templateUrl: 'src/broadcasts/broadcasts.view/broadcasts.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.when('/list', {
           templateUrl: 'src/broadcasts/broadcasts.view/list.view.html',
            controller: 'broadcastsController',
        });

        $routeProvider.when('/list/:listId', {
            templateUrl: 'src/broadcasts/broadcasts.view/listId.view.html',
            controller: 'broadcastController',
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });
})();
