import { drawFunc } from "./drawPoster.js";
import { searchFunc } from "./searchFunc.js";
const searchBtn = document.querySelector(".searchBtn");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDUyZDk1YTU1NzM4OTZhOWUyZTRkMDZiYmFjZDkzYSIsInN1YiI6IjY1MmY2NDQ5MGNiMzM1MTZmNjQwYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-gAyCfvw8yM8Ll7BDo1DEs9CS7vxzStmFhGra5s61g",
  },
};

fetch(
  `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    // 전체 데이터 중 results 배열만 가져오기
    let movieResult = response.results;
    let movieArr = [...movieResult];

    // 전체 데이터 그려줌
    drawFunc(movieArr);

    // 전체 데이터 가지고 검색 filter 하는 함수
    searchFunc(movieArr);
  })
  .catch((err) => console.error(err));

// window.enterkeySearch = () => {
//   if (window.event.keyCode == 13) {
//     searchFunc(movieArr);
//   }
// };
