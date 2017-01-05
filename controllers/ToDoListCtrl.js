var ToDoItem = require('../ToDoItem');

module.exports = function($scope){
  $scope.list = [];

  $scope.init = function(){
    $scope.list.push(new ToDoItem("Groceries", "Go to the grocery store"));
    $scope.list.push(new ToDoItem("Sport", "Lose the weight"));
  }

  $scope.addToDoItem = function(todo){
    if(todo.title && todo.description){
      $scope.list.push(new ToDoItem(todo.title, todo.description));
    }
  }
}
