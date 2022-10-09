$(".btn-success").addEventListener("click", () => {
  console.log($(".text-danger").classList.contains("active"));
  $(".text-danger").classList.toggle("bg-info");
});



const div = createElement(
  "div",
  "card p-3 mx-auto text-primary",
  "<h1>Lorem ipsum 1</h1>"
);

const box = createElement(
  "div",
  "box card shadow mx-auto p-3 text-warning my-3",
  "<h1>lorem ipsum 2</h1>"
);

$(".wrapper").appendChild(div);
$(".wrapper").appendChild(box);

for (let i = 0; i < data.length; i++) {
  const div = createElement(
    "div",
    "card p-3 mx-auto text-primary m-3 ",
    `<img src="${data[i].avatar}" alt="${data[i].first_name}">
      <h3>${data[i].first_name} ${data[i].last_name}</h3>
      <p>${data[i].email}</p>
      
      `
  );
  $(".wrapper").appendChild(div);
}
