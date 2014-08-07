/* global window, require */

(function(document) {
  'use strict';

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
      'angular': {
        'exports': 'angular'
      },
      'angularAnimate': ['angular'],
      'angularSanitize': ['angular'],
      'uiRouter': ['angular'],
      'ionic': {
        'exports': 'ionic'
      },
      'angularIonic': ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']
    },
    priority: [
      "angular"
    ]
  });

  require([
    'cordova',
    'ionic',
    'angular',
    'app'
  ], function(cordova, ionic, angular, app) {
    function start() {
      angular.bootstrap(document, [app['name']]);

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleDefault();
      }
    }

    document.addEventListener('devicceready', start, false);

    if (typeof cordova === 'undefined') {
      angular.element(document.getElementsByTagName('html')[0]).ready(function() {
        try {
          start();
        } catch (e) {
          console.error(e.stack || e.message || e);
        }
      });
    }

  });

}(window.document));
