var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo.
    newTodo.id = todoFunctions.generateId();
    let todoClone = todoFunctions.cloneArrayOfObjects(todos);
    return todoClone.concat(newTodo);
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    let newArray = todoFunctions.cloneArrayOfObjects(todos);
    let filteredNewArray = newArray.filter(object => object.id != idToDelete);
    return filteredNewArray;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    var todosCopy = todoFunctions.cloneArrayOfObjects(todos);
    let todoToChange = todosCopy.find(obj => obj.id == idToMark);
    if (todoToChange.done) {
      todoToChange.done = false;
    } else todoToChange.done = true;
    return todosCopy;
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    var todosCopy = todoFunctions.cloneArrayOfObjects(todos);
    function compare(a, b) {
      const keya = a.id;
      const keyb = b.id;

      let comparison = 0;
      if (keya > keyb) {
        comparison = 1;
      } else if (keya < keyb) {
        comparison = -1;
      }
      return comparison;
    }

    todosCopy.sort(compare);

    return todosCopy;
  },

  editTodo: function(todos, idToEdit) {
    let todosCopy = todoFunctions.cloneArrayOfObjects(todos);
    let todoToEdit = todosCopy.find(obj => obj.id == idToEdit);

    if (todoToEdit.edit) {
      todoToEdit.edit = false;
    } else todoToEdit.edit = true;

    return todosCopy;
  }
};

if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
