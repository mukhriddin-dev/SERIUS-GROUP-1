"use strict";

// -------------------- GET ALL USER LIS ----------

let BASE_URL = `http://localhost:7777`;

const getUsersList = () => {
  fetch(`${BASE_URL}/students`)
    .then((data) => data.json())
    .then((res) => renderData(res));
  // .catch((err) => console.log(err))
};

getUsersList();

//  ----------- RENDER ALL DATA --------------

function renderData(data = []) {
  console.log(data);

  data.length > 0
    ? data.forEach((el) => {
        const tr = createElement(
          "tr",
          "tr",
          `
     <td>${el.id}</td>
     <td>${el.user_name}</td>
     <td>${el.score}</td>
     <td> <button class="btn btn-warning" data-edit="${el.id}">EDIT</button></td>
     <td> <button class="btn btn-danger" data-del="${el.id}">DELETE</button></td>
  `
        );

        $("tbody").appendChild(tr);
      })

    :
    
    
    ($("tbody").innerHTML = "MA'LUMOT TOPILMADI");
}
