let products = [

   {
      name: "Iphone 14 pro",
      brand: "Apple",
      price: 1400,
      isBuy: true,
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
      category: ["smartphone", "tech"],
   },

   {
      name: "Samsung A72",
      brand: "Samsung",
      price: 500,
      isBuy: true,
      img: "https://openshop.uz/uploads/products/photos/202107/EXCBkPLOB3pB0rE0RT6NBH7VrV4aCrphD0C8UNSq.jpg",
      category: ["smartphone"],
   },
   {
      name: "Redmi note 11 pro",
      brand: "Xiomi",
      price: 320,
      isBuy: false,
      img: "https://mi-tashkent.uz/image/cache/catalog/0001/00001/0001/011/xiaomi-redmi-note-11-pro-5g-109-600x600.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Nokia 1202",
      brand: "Nokia",
      price: 5000,
      isBuy: true,
      img: "https://mobile-review.com/review/image/nokia/1202/pic/pic11.jpg",
      category: ["archive", "keyboard smartphone"],
   },

   {
      name: "Iphone 11 pro",
      brand: "Apple",
      price: 700,
      isBuy: true,
      img: "https://www.ixbt.com/img/x780x600/r30/00/02/23/46/AppleiPhone11ProColors091019.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Samsung A22",
      brand: "Samsung",
      price: 200,
      isBuy: true,
      img: "https://mobile-review.com/all/wp-content/uploads/2021/06/samsung_galaxy_a22_5g_1.jpg",
      category: ["smartphone"],
   },
   {
      name: "M11 lite",
      brand: "Xiomi",
      price: 420,
      isBuy: false,
      img: "https://openshop.uz/uploads/products/photos/202203/oT1fjPzA6XjPufbq0o3LYGrDpaCQDW1RaGDbY6Il.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Nokia G21",
      brand: "Nokia",
      price: 230,
      isBuy: true,
      img: "https://m.media-amazon.com/images/I/71x+m2-yb7L._SL1500_.jpg",
      category: ["smartphone"],
   },
   {
      name: "Nokia 311",
      brand: "Nokia",
      price: 100,
      isBuy: false,
      img: "https://drop.ndtv.com/TECH/product_database/images/530201311826PM_635_nokia_asha_311.png",
      category: ["smartphone"],
   },
];

// forEach => array.forEach(funtion(e,index,array){}) 

// push , pop , shift , unshift , length , slice(x,y) , splice(x,y), 


products.forEach((e, index, array) => {
   let card = createElement('div', 'card m-2 shadow', ` 
   
   <img
      src="${e.img}"
      alt="smartphone" class="card-img">

      <div class="card-body">
         <h4 class="card-title">${e.name}</h4>
         <p>Price:<strong> ${e.price}$</strong></p>
         <p>Category:<strong>${e.category}</strong></p>
         <button class="${e.isBuy ? "btn btn-success" : "btn btn-danger"}">${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q"}</button>
      </div>

   `)
   $('.wrapper').appendChild(card);
})


let brands = [];


products.forEach((e) => {
   if (!brands.includes(e.brand)) {
      brands.push(e.brand)
   }
})


brands.forEach((e) => {
   const option = createElement('option', 'item-option', e);
   $('.form-select').appendChild(option)
})




// let num=[1,2,3,3,3,4,4,5,1,6,7,8,12,21,12];

// const filternum=[];

// num.forEach((e)=>{

//    if(!filternum.includes(e)){
//       filternum.push(e)
//    }

// })

// console.log(filternum);































// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 911, 233];


// let num=numbers.forEach((elements,index, array)=>{
//    return elements
// })


// console.log(numbers);

// let langs = ['java', 'javascript', 'php', 'nodejs', 'c++', 'go lang']

// let lg = langs.filter((e) => {
//    return e.length > 10
// })

// console.log('salom'.length);

// console.log(lg);

// let num = numbers.filter((elements, index, array) => {
//    return elements !== 233
// })

// num.push(555)

// console.log(num);