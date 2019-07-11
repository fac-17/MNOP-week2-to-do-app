// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // var submitButton = input[type=submit].addEventListener('click', );
    //var descriptionNode = `<span>${todo.description}</span>`;
    let liSpan = document.createElement("SPAN");
    liSpan.textContent = `${todo.description}`;
    if (todo.done) {
      liSpan.classList.add("liStriked");
    }
    todoNode.appendChild(liSpan);

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.innerHTML = "Delete";
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButton = document.createElement("button");
    markTodoButton.addEventListener("click", function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    markTodoButton.innerHTML = "Complete";
    todoNode.appendChild(markTodoButton);
    markTodoButton.setAttribute("class", "markTodo");

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault(); // Prevent page from reloading
      var description = event.target.description.value; // event.target ....
      var newObj = { description: description, done: false };

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, newObj); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function-
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
