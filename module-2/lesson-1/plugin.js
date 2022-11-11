// SELECTOR ITEM

function $(selector) {
      return document.querySelector(selector);
}

// SELECTOR ALL
function $a(selector) {
      return document.querySelectorAll(selector);
}

///DYNAMIC ELEMENT CREATOR FUNCTION


function createElement(tagName, className, content) {

      let newElement = document.createElement(tagName);
   
      if (className) {
         newElement.setAttribute('class', className);
      }
   
      if (content) {
         newElement.innerHTML = content;
      }
   
      return newElement
   
   }