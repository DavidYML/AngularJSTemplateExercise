/**
 * Created by stannisbaratheon on 06/09/16.
 */
var contactsApp = angular.module('contactsApp', ['contactsApp.core']);

contactsApp.config(function() {
    console.log('app - config');
});

contactsApp.run(function() {
    console.log('app - run');
});