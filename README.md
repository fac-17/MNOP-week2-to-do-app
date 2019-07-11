# MNOP-week2-to-do-app
===
## Use TDD to build a To-do app

The was to build a basic To-do app and the project is split into three parts:
* Use TDD to create the logic needed to modify your to-do list 
* Render the to-do list to the DOM
* Add our own features

## Wednesday:
### What we've achieved:

* We all understand the relationship between our javascript and our testing file.
* We are able to write tests, and then write code to pass them.
* Completed part 1 of the requirements for this project.

## Thursday:
### What we've achieved:
* We completed the DOM.js
* Styled our to-do app with CSS


### What we've learnt today:
* preventDefault() will stop our submit form from automatically reloading the page, which is it's default behaviour
* To access the text inside a form, you need to use event.target.description.value - event.target isn't good enough because all it does it access the form and not the changing text within it.
* Rendering array elements to the dom using a function that iterates through.
* Appending childs

### What we struggled with
* Changing styling of html elements created in Javascript 
* Edit button
    * We tried to add an edit button, we changed the objects to have an edit:true/false key/value pair
    * We then created a new function in the logic.js to change this value. 
    * We rendered the button and had a text input box come up that we then wanted to replace the description span with. 
    * We couldn't get this to work, the span description value always defaulted to it's origial value - possibly because of an issue with the if statement

