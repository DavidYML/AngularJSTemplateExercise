/**
 * Created by stannisbaratheon on 06/09/16.
 */
var contactsApp = angular.module('contactsApp', ['contactsApp.core']);

contactsApp.config(function(appVersion) {
    console.log('app - config ' + appVersion);
});

contactsApp.run(function() {
    console.log('app - run');
});


contactsApp.constant('appVersion','0.2.0')