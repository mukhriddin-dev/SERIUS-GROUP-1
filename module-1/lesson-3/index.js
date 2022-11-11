"use strict";
// function decloartion

//  MyName(12,10,6)


// function MyName(a,b,c){
//    console.log(a*a+b-c);
// }


// function expression ES5


// const load=function(a,b,c){ 
//    console.log(a,b,c);
// }


// const app=load;
// const gif=load;

// load(1,3,2)

// gif('frontend', 'backend', 'mobile')

// app(4,4,4)


// function arrow ES6


// const getMessage=(a,b)=> {
//    console.log(a+b);
//    console.log(a+b);
//    console.log(a+b);
//    console.log(a+b);
// };



// getMessage('Sardor ',' dasturchi')


// console.log('TEST');

// function sendText() {

//    var app = 'Telegram';
//    var text='lorem ipsum'
//    if (app === 'Telegram') {
//       console.log(app);
   
//    }

// }

// // console.log(text);


// {

//    var app = 'Telegram+WhatsUpp';

// }

// console.log(app);

// sendText() 


// const language=new Array('java','javaScript','php','go lang','swift',77, true, undefined, null);
const programmers=['Mukhriddin'];

// console.log(programmers);

// programmers[0]='Sardor';
// programmers[1]='Doniyor';
// programmers[2]='Bobur';
// programmers[3]='Saidabror';

programmers.push('Sardor','Doniyor') // arrayga ohiridan qo'shadi .
programmers.push('Saidabror')

programmers.pop() //elementni ohiridn o'chiradi
// programmers.pop()

programmers.unshift('Bobur')  // boshidan element qo'shadi
programmers.unshift('Xumoyun')
programmers.unshift('Miraziz')


programmers.shift() //boshidan element o'chiradi
console.log(programmers);

console.log(programmers.includes('Abdullajon')); /// array ichidan izlaydi
console.log(programmers.indexOf('Sardor'));// elemnt index qaytaradi


// const topUser=programmers.slice(0,3); // ctrl+c
// console.log(topUser);

// const crop=programmers.splice(2,2); // ctrl+x
// console.log(crop);

// console.log(programmers);