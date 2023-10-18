let posterBox = document.querySelector(".posterBox");
let div = document.createElement("div");
let title = document.querySelector(".title");
let overview = document.querySelector(".overview");
let image = document.querySelector(".posterImg");
let id = document.querySelector(".posterId");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDUyZDk1YTU1NzM4OTZhOWUyZTRkMDZiYmFjZDkzYSIsInN1YiI6IjY1MmY2NDQ5MGNiMzM1MTZmNjQwYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-gAyCfvw8yM8Ll7BDo1DEs9CS7vxzStmFhGra5s61g",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // 전체 데이터 중 results 배열만 가져오기
    let movieResult = response.results;
    let movieArr = [...movieResult];

    movieArr.forEach((movie, i) => {
      let temp = document.createElement("div");
      temp.setAttribute("class", "poster");
      let movieTitle = movieArr[i].title;
      let movieOverview = movieArr[i].overview;
      // api에서 제공하는 이미지는 맨 뒤 /부터만 저장되어있음
      let movieImg = `https://image.tmdb.org/t/p/w500${movieArr[i].backdrop_path}`;
      // 클릭시 나와야함// id.innerText = movieId;
      let movieId = movieArr[i].id;
      let movieRating = movieArr[i].vote_average;

      temp.innerHTML = `
          <div class="posterImgBox">
            <img
              class="posterImg"
              src=${movieImg}
              alt="poster image"
            />
            <div class="posterContentsBox">
              <span class="posterId">${movieId}</span>
              <h2 class="title">${movieTitle}</h2>
              <div class="ratingBox">
                <span class="rating">${movieRating}</span>
              </div>
              <p class="overview">${movieOverview}</p>
            </div>
          </div>
  `;

      document.querySelector(".posterBox").append(temp);
    });
  })
  .catch((err) => console.error(err));

// 메일 아이콘 누르면 메일 주소 복사
// ClipboardJS with CDN
function copy() {
  var clipboard = new ClipboardJS(".mail");
  clipboard.on("success", function (e) {
    console.log("Copy");
  });
  clipboard.on("error", function (e) {
    console.log("Copy Failed");
  });
}
