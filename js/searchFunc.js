// Search

const searchBtn = document.querySelector(".searchBtn");

export function searchFunc(movieArr) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchResult = [];

    searchResult = movieArr.filter((movie) => {
      let searchInputVal = document.querySelector(".searchInput").value;
      // console.log(typeof movie.title.includes(searchInputVal));
      let sameVal = movie.title.includes(searchInputVal);
      if (sameVal) {
        // sameArr.push(movie);
        return movie;
      }
    });
    console.log(searchResult);
    console.log(typeof searchResult);
  });
  return searchResult;
}
