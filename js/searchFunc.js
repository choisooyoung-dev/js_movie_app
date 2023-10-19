// Search

const searchBtn = document.querySelector(".searchBtn");

export function searchFunc(movieArr) {
  let searchResult = [];

  searchResult = movieArr.filter((movie) => {
    let searchInputVal = document.querySelector(".searchInput").value;
    // console.log(typeof movie.title.includes(searchInputVal));
    let sameVal = movie.title.includes(searchInputVal);
    if (sameVal) {
      return movie;
    }
  });
  console.log(searchResult);
  console.log(typeof searchResult);
  return searchResult;
}
