"use strict";

movies.splice(60);

// ===============  =============== NORMALIZE MOVIES  =============== =============/

const AllMovies = movies.map((e) => {
   return {
      title: e.title,
      year: e.year,
      category: e.categories,
      id: e.imdbId,
      rating: e.imdbRating,
      time: `${Math.trunc(e.runtime / 60)} Soat , ${e.runtime % 60} daqiqa`,
      lang: e.language,
      youtube: `https://www.youtube.com/embed/${e.youtubeId}`,
      summary: e.summary,
      smallPic: e.smallThumbnail,
      highPic: e.bigThumbnail,
   };
});

// ===============  =========== NORMALIZE MOVIES END  =============== =============/

// ===============  =========== RENDER MOVIES  =============== =============/

function moviesRender() {
   AllMovies.forEach((movies) => {
      const card = createElement(
         "div",
         "card",
         `

<img src=${movies.smallPic} class="card-img-top"
   alt="Fissure in Sandstone" /> 
<div class="card-body">
   <h5 class="card-title">${movies.title}</h5>
   <ul>
      <li><strong>Year:</strong> ${movies.year}</li>
      <li><strong>Language:</strong> ${movies.lang}</li>
      <li><strong>Category:</strong> ${movies.category}</li>
      <li><strong>Rating:</strong> ${movies.rating}</li>
   </ul>
   <a href="#!" class="btn btn-primary">Read more</a>
   <a href=${movies.youtube} target="_blank" class="btn btn-danger">YouTube</a>
   <a href="#!" class="btn bookmark btn-warning"><i class="bi bi-bookmark-heart"></i></a>
</div>`
      );

      $(".wrapper-films").appendChild(card);
   });
}

moviesRender();

// ===============  =========== RENDER MOVIES END =============== =============/


// ------------------------- DYNAMIC CATEGORY -------------////



function CategoryRender() {
   const category = [];

   AllMovies.forEach((e) => {
      e.category.forEach((ct) => {
         if (!category.includes(ct)) {
            category.push(ct)
         }
      })
   })
   category.sort()
   category.forEach((e) => {
      const option = createElement('option', 'item-option', e);
      $("#category").appendChild(option)
   })

}

CategoryRender()

// ------------------------- DYNAMIC CATEGORY END -------------



// ------------------ FIND FLMS FUNCTION ----------------/
const findFilm = (text, rating, category) => {

   return AllMovies.filter((e) => {
      return e.title.match(text) && e.rating >= rating && e.category.includes(category)
   })
}




$('.search').addEventListener('click', (e) => {
   $(".wrapper-films").innerHTML = `<span class="loader"></span>`;
   const searchText = $('#search').value.trim();
   const ratingFilm = $('#rating').value;
   const categoryFilm = $('#category').value;

   const searchTerm = new RegExp(searchText, "gi");

   const searchResult = findFilm(searchTerm, ratingFilm, categoryFilm);


   setTimeout(() => {

      findFilmSearchRender(searchResult)

      $('#res').textContent = searchResult.length;
   }, 2000)

})

// ------------------ FIND FLMS FUNCTION END ----------------/




function findFilmSearchRender(data = []) {
   $(".wrapper-films").innerHTML = ""

   data.length > 0 ? data.forEach((movies) => {
      const card = createElement(
         "div",
         "card",
         `

<img src=${movies.smallPic} class="card-img-top"
alt="Fissure in Sandstone" /> 
<div class="card-body">
<h5 class="card-title">${movies.title}</h5>
<ul>
   <li><strong>Year:</strong> ${movies.year}</li>
   <li><strong>Language:</strong> ${movies.lang}</li>
   <li><strong>Category:</strong> ${movies.category}</li>
   <li><strong>Rating:</strong> ${movies.rating}</li>
</ul>
<a href="#!" class="btn btn-primary">Read more</a>
<a href=${movies.youtube} target="_blank" class="btn btn-danger">YouTube</a>
<a href="#!" class="btn bookmark btn-warning"><i class="bi bi-bookmark-heart"></i></a>
</div>`
      );

      $(".wrapper-films").appendChild(card);

   }) : $(".wrapper-films").innerHTML = `<h1 class="text-center">NOT FOUND</h1>`;


}

















// const text="thewbn  dark web community";

// const searchTerm=new RegExp("thewbm","gi")

// console.log(searchTerm);

// console.log(text.match(searchTerm))