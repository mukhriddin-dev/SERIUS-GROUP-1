"use strict";






let card = document.querySelector('.card');
let btn = document.querySelector('.btn-danger');

// console.log(card.id);
// console.log(card.title);


// console.log(card.class);
// console.log(card.data-info);

// btn.addEventListener('click', (e) => {

//    if (card.getAttribute('data-toggle') === 'true') {
//       card.setAttribute('class', "p-5 bg-info text-danger mx-auto w-75");
//       card.setAttribute('data-toggle', 'false');
//       e.target.setAttribute('class', 'btn btn-success text-light')
//    } else {
//       e.target.setAttribute('class', 'btn btn-danger text-light');

//       card.setAttribute('data-toggle', 'true');
//       card.setAttribute('class', "card p-4 bg-success text-warning mx-auto w-50");
   
//    }

// })


// function addStyle(){
//    console.log("style");
// }

// // addStyle()

// setTimeout(()=>{
//    addStyle()
// } , 4000)

// let i=0;

// setInterval(()=>{
//    i++
//    console.log(i);
// //   document.body.style.backgroundColor=`rgba(0,0,0,${1*i/10})`;
// //   document.body.style.backgroundColor=`rgba(${3*1},${12*i},0,${1*i/10})`;
// },1000)


// console.log(card.getAttribute('class'));
// console.log(card.getAttribute('id'));
// console.log(card.getAttribute('data-info'));


// let h1=document.querySelector('h1');

// h1.setAttribute('class','text-center text-primary fs-3');
// h1.setAttribute('id','title');





















// window.addEventListener('scroll',(e)=>{
// console.log(window.screenY);
// })


// window.addEventListener('DOMContentLoaded',()=>{

// console.log("ok");

// })


// window.addEventListener('load',()=>{
//    console.log("loaded");
// })





let week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];






setInterval(()=>{
   const taqvim=new Date();


// console.log(taqvim.getFullYear()); // yil
// console.log(month[taqvim.getMonth()]); // oy raqami
// console.log(taqvim.getDate()); // bugungi sana
// console.log(week[taqvim.getDay()]); // bugungi hafta kuni raqami 
// console.log(taqvim.getHours()); // soat
// console.log(taqvim.getMinutes()); // daqiqa
// console.log(taqvim.getSeconds()); // soniya


card.innerHTML=`${taqvim.getFullYear()} . ${month[taqvim.getMonth()]} . ${taqvim.getDate()} . ${taqvim.getHours()}: ${taqvim.getMinutes()} : ${taqvim.getSeconds()} `;

},1000)


let box=document.querySelector('.box');


box.addEventListener('click', ()=>{

   box.classList.toggle('text-danger');
   console.log(box.classList.contains('bg-danger'));
   console.log(box.classList);
   
})






