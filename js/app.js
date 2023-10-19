import { drawFunc } from "./drawPoster.js";
import { searchFunc } from "./searchFunc.js";
const posterBox = document.querySelector(".posterBox");

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
    // 전체 데이터
    let movieResult = response.results;

    // 전체 데이터 배열
    let movieArr = [...movieResult];

    // 전체 데이터 그려줌
    drawFunc(movieArr);

    // 전체 데이터 가지고 검색 filter 하는 함수
    // const search = searchFunc(movieArr);
    searchBtn.addEventListener("click", (e) => {
      // const poster = document.querySelectorAll(".poster");
      // const titleVal = document.querySelector(".title").textContent;
      e.preventDefault();
      show();
    });

    function show() {
      const inpuVal = document.querySelector(".searchInput").value;
      if (inpuVal === "") {
        alert("검색어를 입력해주세요.");
      } else {
        movieArr = [...movieResult];
        posterBox.replaceChildren();
        const search = searchFunc(movieArr);
        console.log(search); // [{...}, {...}, ...]
        movieArr = [];
        movieArr.push(search);

        drawFunc(search);
      }
    }
  })
  .catch((err) => console.error(err));
