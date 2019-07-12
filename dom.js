(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -2, description: "Impeach Donald Trump", edit: false },
    { id: -1, description: "Save the dolphins", edit: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo

  var createTodoNode = function(todo) {
    let todoNode = document.createElement("li");
    let liSpan = document.createElement("SPAN");
    liSpan.textContent = `${todo.description}`;
    let deleteButtonNode = document.createElement("button");
    let markTodoButton = document.createElement("button");
    let editTodoButton = document.createElement("button");
    let editInput = document.createElement("input");
    //let saveButton = document.createElement("button");  We didn't get round to using this
    editInput.type = "text";
    editInput.display = "none";
    editInput.value = todo.description;

    // Add delete button start
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.setAttribute("class", "deleteButton");
    todoNode.appendChild(deleteButtonNode);
    // Add delete button end

    // Add markTodo button start
    markTodoButton.addEventListener("click", function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    markTodoButton.textContent = "Complete";
    todoNode.appendChild(markTodoButton);
    markTodoButton.setAttribute("class", "completeButton");
    todoNode.setAttribute("class", "list-items");
    // Add markTodo button end

    // // Add editTodo button start
    editTodoButton.addEventListener("click", function(event) {
      let newState = todoFunctions.editTodo(state, todo.id);
      update(newState);
    });
    editTodoButton.textContent = "Edit";
    todoNode.appendChild(editTodoButton);
    markTodoButton.setAttribute("class", "button");
    editTodoButton.setAttribute("class", "editButton");
    todoNode.setAttribute("class", "list-items");
    // Add editTodo button start

    // If loop to check complete status
    if (todo.done) {
      liSpan.classList.add("liStriked");
      markTodoButton.textContent = "Uncomplete";
      markTodoButton.setAttribute("id", "notComplete");
    }
    todoNode.appendChild(liSpan);

    // If loop to attempt to edit item
    if (todo.edit) {
      liSpan.style.display = "none";
      editInput.display = "block";
      editInput.value = todo.description;
      editTodoButton.textContent = "Save";
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
      event.preventDefault(); // Prevent page from reloading

      var description = event.target.description.value; 
      // stops you entering an empty submit
      if (description != '') {
        var newObj = { description: description, done: false, edit: false };
      }
      var newState = todoFunctions.addTodo(state, newObj); 
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

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
