// Search

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

export function searchFunc(movieArr) {
  let movieTitleArr = [];
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    movieArr.forEach((movie) => {
      movieTitleArr.push(movie.title);
    });
    movieTitleArr.includes(searchInput.value)
      ? console.log("yes")
      : console.log("no");
  });
}
