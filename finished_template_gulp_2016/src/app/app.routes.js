angular.module('contactsApp')
    .config(function($routeProvider) {

        $routeProvider.when('/contacts-list', {
            templateUrl: 'app/contacts-list/contacts-list.html',
            controller: 'contactListCtrl',
            controllerAs: 'clc'
        });

        $routeProvider.when('/contacts-add', {
           templateUrl: 'app/contacts-add/contacts-add.html',
            controller: 'contactAddCtrl',
            controllerAs: 'cac'
        });

        $routeProvider.when('/contacts-details/:contactId', {
            templateUrl: 'app/contacts-details/contacts-details.html',
            controller: 'contactDetailsCtrl',
            controllerAs: 'cdc'
        })

        $routeProvider.otherwise({
           redirectTo: '/contacts-list'
        });

    });