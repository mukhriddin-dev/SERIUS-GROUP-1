"use strict";

// console.log(Math.random());
// let num = +prompt('raqam kiriting faqat ikki honali bo\'lsin')

//console.log(Math.floor(num)); //kichik tomonga yahlitlaydi

//console.log(Math.ceil(num)); // katta tomonga yahlitlaydi

//console.log(Math.round(num)); // haqqoiny yaxlitlaydi

//console.log(Math.abs(num));  // modulini olib beradi

//console.log(Math.max(1,2,3,-33,88,90,65)); // min / max imali

// console.log(Math.pow(25,1/2));  daraja ga ko'taradi

// console.log(Math.sqrt(4096));


// m-1
// let birlik=num%10;

// let onlik=Math.trunc( (num-birlik)/10 )

// console.log(`o'nlikda: ${onlik} , birlik: ${birlik}`);

// m-2


let a = +prompt('a=');
let b = +prompt('b=');

if (a % 2 == 1 && b % 2 == 1) {
   console.log('sonlar toq');
} else {
   console.log('sonlardan biri juft bo\'lishi mumkin');
}