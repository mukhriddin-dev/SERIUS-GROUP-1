"use strict";

let card = document.querySelector(".card");

//2


//3


// card.addEventListener('click', function(){
//    card.style.backgroundColor="coral";
//  })


//  card.addEventListener('dblclick', ()=>{
//    card.style.backgroundColor="coral";
//  })


// card.addEventListener('mouseover', ()=>{
//    card.style.backgroundColor="coral";
//    console.log('over');
//  })  

//  card.addEventListener('mouseout', ()=>{
//    card.style.backgroundColor="coral";
//    console.log('out');
//  })   


// card.addEventListener('mousedown', ()=>{
//    card.style.backgroundColor="coral";
//    console.log('down');
//  })  

//  card.addEventListener('mouseup', ()=>{
//    card.style.backgroundColor="crimson";
//    console.log('up');
//  })


// const styleAdd=(style)=>{
//    console.log(style);

// }

// card.onclick=function(){
//        this.style.backgroundColor="yellowgreen"
// }

// card.addEventListener('click', (e)=>{
//    e.target.style.backgroundColor="green"
// })

const message = document.querySelector('.message'),
      form = document.querySelector('#form'),
      userName = document.querySelector('#userName'),
      submitBtn = document.querySelector('#submit');

      console.log(userName);

      // userName.addEventListener('focus',(e)=>{
      //    console.log('ELEMENT FOCUSED');
      //    e.target.setAttribute('placeholder',"")
      // })

      // userName.addEventListener('blur',(e)=>{
      //    console.log('ELEMENT BLURED');
      //    e.target.setAttribute('placeholder',"ENTER USERNAME")
      // })


      // userName.addEventListener('change',(e)=>{
      //    console.log('ELEMENT BLURED');
      //    message.innerHTML=e.target.value;
      // })


      // userName.addEventListener('input',(e)=>{
      //    console.log('ELEMENT BLURED');
      //    message.innerHTML=e.target.value;
      // })

      form.addEventListener('submit',(e)=>{
         e.preventDefault();
         console.log(e);
         console.log('submit');
      })





































// card.style.cssText="background-color:green; color:yellow; border-radius:40px;";

// function decloartion ES1
// expression ES5
// arrow ES6
// anonym




// (function(){



//    card.style.backgroundColor = "green";
//    card.style.color = "yellow";
//    card.style.borderRadius = "40px";




// }())



// function addStyle() {
//       card.style.backgroundColor = "green";
//    card.style.color = "yellow";
//    card.style.borderRadius = "40px";
//  }



// const addStyle=function(color,bg,radius){
//         card.style.backgroundColor = color;
//         card.style.color = bg;
//         card.style.borderRadius = radius;
// }

// addStyle('red','yellow','70px')



// const app = (color,bg,radius) => {
//    card.style.backgroundColor = color;
//    card.style.color = bg;
//    card.style.borderRadius = radius;

// }

// app('red','yellow','70px')


// const sayHello = (sms) => {
//    if (sms){
//       return sms
//    }else{
//       return '404'
//    }

// }

// console.log(sayHello("ok"));


// const load=addStyle;