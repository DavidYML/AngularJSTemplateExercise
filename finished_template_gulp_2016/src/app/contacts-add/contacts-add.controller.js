function ContactsAddController($log,$location) {

    this.title = 'Add Contacts';

    this.newContact = {
        lastName: '',
        firstName: '',
        email: ''
    };

    this.addContact = function () {
        var contactToAdd = {
            name: {
                first: this.newContact.firstName,
                last: this.newContact.lastName
            },
            email: this.newContact.email
        };

        $log.debug(contactToAdd);

        this.newContact.firstName = '';
        this.newContact.lastName = '';
        this.newContact.email = '';

        $location.path('/contacts-list');

    }




}

angular.module('contactsApp')
    .controller('contactAddCtrl', ContactsAddController)