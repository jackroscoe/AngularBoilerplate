(function() {

   'use strict';

    angular.module('placeholderAppName.customRoutesModule',
        [
            'ngRoute'
        ]
    )

    .config(['$routeProvider', function($routeProvider) {

        // Routes will go here
        $routeProvider.
        when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/'
        });

    }]);

})();