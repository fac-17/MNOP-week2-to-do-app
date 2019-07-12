// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "Ban single-use plastic", edit: false },
    { id: -2, description: "Impeach Donald Trump", edit: false },
    { id: -1, description: "Save the dolphins", edit: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // var submitButton = input[type=submit].addEventListener('click', );
    //var descriptionNode = `<span>${todo.description}</span>`;
    let liSpan = document.createElement("SPAN");
    liSpan.textContent = `${todo.description}`;
    var deleteButtonNode = document.createElement("button");
    var markTodoButton = document.createElement("button");
    var editTodoButton = document.createElement("button");
    let editInput = document.createElement("input");
    let saveButton = document.createElement("button");

    editInput.type = "text";
    editInput.display = "none";
    editInput.value = todo.description;

    // this adds the delete button

    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.innerHTML = "Delete";
    deleteButtonNode.setAttribute("class", "deleteButton");
    todoNode.appendChild(deleteButtonNode);
    // deleteButtonNode.setAttribute("class", "button");

    //End of delete button

    // add markTodo button
    markTodoButton.addEventListener("click", function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    markTodoButton.innerHTML = "Complete";
    todoNode.appendChild(markTodoButton);
    // markTodoButton.setAttribute("class", "button");
    markTodoButton.setAttribute("class", "completeButton");
    todoNode.setAttribute("class", "list-items");

    //End mark todo

    // add editTodo button
    editTodoButton.addEventListener("click", function(event) {
      let newState = todoFunctions.editTodo(state, todo.id);

      update(newState);
    });

    editTodoButton.innerHTML = "Edit";
    todoNode.appendChild(editTodoButton);
    markTodoButton.setAttribute("class", "button");
    editTodoButton.setAttribute("class", "editButton");
    todoNode.setAttribute("class", "list-items");
    // End edit

    if (todo.done) {
      liSpan.classList.add("liStriked");
      markTodoButton.innerHTML = "Uncomplete";
      markTodoButton.setAttribute("id", "notComplete");
    }
    todoNode.appendChild(liSpan);

    if (todo.edit) {
      liSpan.style.display = "none";
      editInput.display = "block";
      editInput.value = todo.description;
      editTodoButton.innerHTML = "Save";
      todoNode.appendChild(editInput);
    } else if (!todo.edit && editInput.value !== todo.description) {
      liSpan.style.display = "block";
      editInput.display = "none";
      liSpan.textContent = "test";
      todoNode.appendChild(editInput.value);
    }

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
      // stops you entering an empty submit
      if (description != '') {
        var newObj = { description: description, done: false, edit: false };
      }

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, newObj); // ?? change this!
      update(newState);
      event.target.description.value = "";
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
