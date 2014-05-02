require.config({
    paths: {
        cordova: '../cordova',
        angular: '../lib/ionic/js/angular/angular',
        angularAnimate: '../lib/ionic/js/angular/angular-animate',
        angularSanitize: '../lib/ionic/js/angular/angular-sanitize',
        uiRouter: '../lib/ionic/js/angular-ui/angular-ui-router',
        ionic: '../lib/ionic/js/ionic',
        angularIonic: '../lib/ionic/js/ionic-angular'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularAnimate' : ['angular'],
        'angularSanitize' : ['angular'],
        'uiRouter' : ['angular'],
        'ionic' :  {'exports' : 'ionic'},
        'angularIonic': ['angular', 'ionic','uiRouter', 'angularAnimate', 'angularSanitize']
    },
    priority: [
        "angular"
    ]
});

require( [
    'cordova',
    'ionic',
    'angular',
    'app'], function(cordova, ionic, angular, app) {
    'use strict';

    var start  = function(){
        angular.bootstrap(document, [app['name']]);
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
    }
    (document.body && device) ? start() : ionic.Platform.ready(start);

});
