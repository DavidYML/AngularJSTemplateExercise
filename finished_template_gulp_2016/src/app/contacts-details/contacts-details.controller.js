function ContactsDetailsController ($routeParams) {
    this.title = 'Details for id ';

    this.contactId = $routeParams.contactId;
}

angular.module('contactsApp').controller('contactDetailsCtrl',ContactsDetailsController)