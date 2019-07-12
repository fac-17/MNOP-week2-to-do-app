# MNOP-week2-to-do-app

## Introducing: The Team

[@georgiamshaw](https://github.com/georgiamshaw)
[@andy-mc-donald](https://github.com/andy-mc-donald)
[@laleonie](https://github.com/LaLeonie)
[@tonylomax](https://github.com/tonylomax)

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
    
    
    
    
    Project 2 - To-Do App
To-Do List
- [x] Everyone read JS
- [x] Create repo
- [x] Everyone clone repo
- [x] Create Readme
- [ ] Assign ReadMe to people
- [x] Check everyone has dependencies
- [x] Divide JS function work between pairs
Wednesday
PART 1
- [x] Create three functions in todoFunction Object, using TDD
- [x] Complete stretch goal function (sort)
PART 2
- [x] Complete createTodoNode function, using TDD
- [ ] Create wireframe for site to check functionality
Thursday
- [ ] Integrated/functional testing
PART 4
Pair 1
- [x] Make complete button toggle done value in todo object
- [x] Add ‘delete’ name to delete button
- [x] Add titles, headers etc
Pair 2
- [x] Number each ID using todo ID (can’t be done)
- [x] Make everything bigger
- [x] Change the initial todos to better examples
- [x] Remove text from input on submit
Extra
- [x] Make input text box bigger *
- [x] Submit button bigger and style
- [x] Style delete and complete buttons and align right. Make complete change to uncomplete
- [x] Border and margin around list items *
- [x] Change fonts *
- [x] Get rid of bullett points
- [x] Additional styling
- [x] Branding
- [x] Colours
Stretch
- [x] Add edit button
More CSS
- [ ] Add hover over for buttons
- [x] Change button colors
- [x] Float buttons right
- [x] Align list and submit sections
- [x] Change the submit font
Friday
- [x] Read through code review issues and assign
- [x] Decide on most pressing issues and complete
- [ ] Final live tests
- [ ] Check ReadMe. It must have install instructions + dependencies
- [ ] Ensure presentation is ready
Code Review Issues
- [x] Blank to-do can be submitted
- [x] Text of long todo doesn’t wrap but escapes box
- [ ] Option: you could incorporate the forest pic into the center of the page (probably as background image) on a mobile layout, rather than being off to one side.
- [x] You could put the h1 Environmental to-do list inside html header tag or something like that instead of just inside the body with everything else. (We decided against this)
- [ ] Mobile version
- [ ] Probably also add a min-width and max-width to prevent weird things happening.
- [x] Delete draws a line through item but also changes size of the button and alters layout slightly, so this should be fixed at some point. Med-high priority actually.
- [x] There are a few bits of commented code that should be removed
- [x] Additional browser tags:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie-edge" >
```
- [x] Favicon
- [x] Search engine stuff in the html
```
<meta name="description" content="environmental-themed to-do list" >
<meta name="keywords" content="to, do, list, environment, trees, earth" >
<meta name="author" content="Your Company Name" >
```
- [x] Delete comments (L/T)
- [x] Change innerhtml to text content (L/T)
- [ ] Main image not fully mobile reponsive
- [x] Image hidden when deleting tasks - The bottom green border gets pulled up when deleting tasks, meaning the lovely tree photo disappears.
- [x] Margin - It would be nice, for consistency and harmony, to adjust top/bottom/left/right margins of your right column. (L/T)
- [x] Add alt tag to main image (L/T)
- [x] Change to 2 fonts not 3 (L/T)
- [x] Readjust title on re-size (L/T)
—
Recap at the end of Wednesday:
What we’ve achieved:
* We all understand the relationship between our javascript and our testing file.
* We are able to write tests, and then write code to pass them.
* Completed part 1 of the requirements for this project.
What we need to work on:
* The rest of the project.
* Better at communicating with each other about falling behind/not understanding.
* Swap partners more regularly.
* Setting up a structure in CSS file
*
Plans for tomorrow:
* Review where we are with all the functions.
* Work on dom.js.
* Finish part 2 for lunch!
* Spend the afternoon working on:
* Filtering by completed (linked to sort function already done on Wednesday)
* Editing descriptions
* CSS and HTML
* Testing
**Assume that it will take 2 people 3 hours to complete 1 part of part 2 (there are two parts of part 2). If after 90 mins, if 1 team is finished, swap partners.
Have check ins every half an hour.**
___
Thursday
What we’ve learnt today:
* preventDefault() will stop our submit form from automatically reloading the page, which is it’s default behaviour
* To access the text inside a form, you need to use event.target.description.value - event.target isn’t good enough because all it does it access the form and not the changing text within it.
* Rendering array elements to the dom using a function that iterates through.
* Appending childs
* Friday: word-break: break-all! Amazing!!
What we struggled with
* Changing styling of html elements created in Javascript
* Edit button
* We tried to add an edit button, we changed the objects to have an edit:true/false key/value pair
* We then created a new function in the logic.js to change this value.
* We rendered the button and had a text input box come up that we then wanted to replace the description span with.
* We couldn’t get this to work, the span description value always defaulted to it’s origial value - possibly because of an issue with the if statement
Thanks To
Big thank you to Jan for his help on line through on completed!

And James for some other things we can’t remember

