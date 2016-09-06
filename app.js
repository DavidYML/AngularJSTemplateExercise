var appModule = angular.module('todoApp', []);
appModule.controller('todoCtrl', function($scope) {
    console.log("Controller Loaded");

    $scope.title = "David's ToDo List";

    $scope.todos = [
        {description: 'Learn Javascript', done:true},
        {description: 'Learn HTML', done:true},
        {description: 'Learn CSS', done:true},
        {description: 'Learn AngularJS', done:false}
    ];

    $scope.countIncomplete = function() {
        var count = 0;
        $scope.todos.forEach(function(val) {
            if(!val.done) {
                count++;
            }
        });
        return count;
    }

    $scope.addToDo = function(desc) {
        var newTodo = {
            description : desc,
            done: false
        };

        $scope.todos.push(newTodo)
    }


});
