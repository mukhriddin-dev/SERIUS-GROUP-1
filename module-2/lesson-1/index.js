"use strict";


function dataFetch() {
   fetch('https://reqres.in/api/users?page=2')
      .then((data) => data.json())
      .then((res) => dataRender(res.data))
      .catch((error) => console.log(error))
}

dataFetch()


function dataRender(data) {
   console.log(data);

   data.forEach((item) => {
      const card = createElement('div', 'card p-2 shadow w-25', `
      <img src="${item.avatar}" alt="rasm">
      <h6>${item.email}</h6>
      <p>${item.first_name} ${item.last_name
      }</p>
      
      `);

      $('.wrapper').appendChild(card)
   })

}