(function () {

    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('placeholderAppName',
        [
            'placeholderAppName.customRoutesModule',
            'placeholderAppName.home',
            'placeholderAppName.login'
        ]
    );

})();

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
/*------------------------------------*\
   - homeController.js -
 \*------------------------------------*/
/**
 *
 * FULL DESCRIPTION GOES HERE
 *
 */
(function() {

    'use strict';

    angular.module('placeholderAppName.home', [])

    .controller('homeController', function() {



    });
})();



