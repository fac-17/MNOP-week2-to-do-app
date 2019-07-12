# MNOP-week2-to-do-app

## Introducing: The Team

[@georgiamshaw](https://github.com/georgiamshaw)

[@andy-mc-donald](https://github.com/andy-mc-donald)

[@laleonie](https://github.com/LaLeonie)

[@tonylomax](https://github.com/tonylomax)

## Our Mission: Use TDD to build a To-do app

The mission could be split into three key parts:

* Use TDD to create the logic needed to modify your to-do list 
* Render the to-do list to the DOM
* Pimp up our to do list and make it look on point 🎯

## How we approached our Mission

* We used hackmd tickboxes to create a to-do list so that everybody could see what we were working on
* We regularly reconvened to check in the partnerships. 

## What ⚒️ did we need in our 🧰?

**TDD** was the main tool we used on Wednesday, including **tape**, **tap** and **istanbul**. On Thursday we explored more **Javascript** and used a sprinkle of **CSS** and **HTML** on Thursday afternoon, too.

![Over to Q](https://media.giphy.com/media/JPMTkCi1Zrupy/giphy.gif)

## Goals ⚽

- [x] Enter tasks I need to do into a web page so that I don't forget them
- [x] View the tasks I have added in a list so that I can plan my day
- [x] Mark tasks as complete so that I can focus on the tasks I have left
- [x] The to-dos to be large enough so that I don't hit the wrong one with my thumb

## Stretch Goals ⚽⚽

- [x] Edit to dos so that I can amend tasks (almost!!!)
- [ ] Click on any part of a to do to mark it as complete
- [ ] A visual indication of which to do I'm about to interact with

## What we've achieved: Mission completed

* We all understand the relationship between our Javascript and our testing file.
* We are able to write tests 🧪 and then write code to pass them.
* We completed the Javascript so that the to do app ran as we wanted it to.
* Styled our to-do app with great CSS 🎨

## What could have gone better: Mission almost completed

* We found that on the first day of testing we should have checked in with each other more as Tony and Leonie went far ahead and could have supported Andy and Georgia earlier on with their testing
* Better understand the order of when things run inside our Javascript files
* Changing styling of html elements created in Javascript
* Edit button could have been finished:
   * We changed the objects to have an edit:true/false key/value pair
   * We then created a new function in the logic.js to change this value
   * We rendered the button and had a text input box come up that we then wanted to replace the description span with
   * We couldn’t get this to work, the span description value always defaulted to it’s origial value - possibly because of an    issue with the if statement

### What we've learnt:

#### JS
* preventDefault() will stop our submit form from automatically reloading the page, which is its default behaviour
* To access the text inside a form, you need to use event.target.description.value - event.target isn't good enough because all it does it access the form and not the changing text within it.
* Rendering array elements to the dom using a function that iterates through.
* Appending childs

 ![](https://i.imgur.com/bfR6zNX.png)
 * Rendering array elements to the dom using a function that iterates through.
 * Appending children
 
 * We got familiar with callbacks 
 * array.find to access an object in an array without needing to use a foreach loop
![](https://i.imgur.com/6HUlUyl.png)

#### CSS
* In the CSS we were able to fix overflow issues with our input text by using: `word-break: break-all`
* Made header responsive with view port width as a unit
* We used grid and grid templates to maintain consistency. Buttons don't change size 🙌
* Set the image to background in the grid and the size of that section as a percentage. This prevented the picture from distoring.
* We used normalize. This mostly helped with ocassional conflicts 😳
* For the mobile version we switched to a clean list-only view and got rid of the image down the left-hand side.

### Screenshots:
![desktop_version](/relative/path/to/img/To-do-list-screenshot(desktop).png)

