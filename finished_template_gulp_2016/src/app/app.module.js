/**
 * Created by stannisbaratheon on 06/09/16.
 */
var contactsApp = angular.module('contactsApp', ['contactsApp.core','ngRoute']);

contactsApp.config(function(appVersion) {
    console.log('app - config ' + appVersion);
});

contactsApp.run(function() {
    console.log('app - run');
});



contactsApp.constant('apiUrl','http://api.randomuser.me');

contactsApp.constant('appVersion','0.2.0');