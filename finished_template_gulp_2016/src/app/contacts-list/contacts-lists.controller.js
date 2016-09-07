function ContactsListController($http, apiUrl) {

    var that = this;

    this.title = 'Contacts List';

    this.contacts = [];

    this.showList = true;

    this.toggleList = function () {
        this.showList = !this.showList;
    }

    function getContacts() {

        $http.get(apiUrl + "/?results=20").then(function(res) {
            that.contacts = res.data.results;
        });
    }

    getContacts();




}


angular.module('contactsApp')
    .controller('contactListCtrl', ContactsListController)