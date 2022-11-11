// plugin js 

const $=function(selector){
   return document.querySelector(selector)
}

// all selector

const $a=function(selector){
   return document.querySelectorAll(selector)
}

// ============== DYNAMIC ELEMNTS =============///


const createElement=function(tagName,className,content){
      const newElement=document.createElement(tagName);
            newElement.setAttribute('class',className);
            newElement.innerHTML=content;

      return newElement
}



