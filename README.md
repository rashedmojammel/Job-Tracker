# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-> The main difference is in getElementById only select single element by its unique id attribute , in getElementsByClassName Selects all elements with a specific class name and querySelector Selects the first element that matches a CSS selector,
and querySelectorAll Selects all elements that match a CSS selector. 
# 2. How do you create and insert a new element into the DOM?
step 1 : Create the element
const rashed = document.createElement()
step 2 : Add any content 
ex : rashed.ClassName = "mojammel"
step : Insert into DOM
# 3. What is Event Bubbling? And how does it work?
->Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements
# 4. What is Event Delegation in JavaScript? Why is it useful?
->Event Delegation means adding an event listener to a parent element instead of multiple child elements.
# 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() -> Stops the default browser behavior.
stopPropagation() -> Stops the event from bubbling up to parent elements.
