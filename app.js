const posterBox = document.querySelector(".posterBox");
const posterContentsBox = document.querySelector(".posterContentsBox");
const title = document.querySelector(".title");
const overview = document.querySelector(".overview");
const posterBackImg = document.querySelector(".posterImg");
const image = document.querySelector(".posterImg");
const id = document.querySelector(".posterId");
const searchInput = document.querySelector(".searchInput");
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

    drawFunc(movieArr);
    searchFunc(movieArr);

    // // 모달 할지 말지 고민중
    // posterBox.addEventListener("click", (e) => {
    //   alert(`해당 영화의 id => ${e.target.id}`);
    // });
  })
  .catch((err) => console.error(err));

// poster 그려주기
function drawFunc(movieArr) {
  movieArr.filter((movie, i) => {
    let temp = document.createElement("div");
    temp.setAttribute("class", "poster");
    let movieTitle = movieArr[i].title;
    let movieOverview = movieArr[i].overview;
    // api에서 제공하는 이미지는 맨 뒤 /부터만 저장되어있음
    let movieImg = `https://image.tmdb.org/t/p/w500${movieArr[i].backdrop_path}`;

    // 클릭시 나와야함
    let movieId = movieArr[i].id;
    let movieRating = movieArr[i].vote_average;
    // let limitLength = 60;
    // console.log(movieOverview.length);
    // if (movieOverview.length >= limitLength) {
    //   movieOverview = movieOverview.substr(0, limitLength - 2) + "...";
    // }

    if (!movieOverview) {
      movieOverview = "이 영화는 줄거리가 제공되지 않습니다.";
    }

    temp.innerHTML = `
    <div class="card bg-dark text-white">
    <img src="${movieImg}" class="card-img posterImg" alt="movie poster image">
    <div class="card-img-overlay posterContentsBox">
      <h5 class="card-title title">${movieTitle}</h5>
      <div class="contentWrap">
      <p class="card-text overview">${movieOverview}</p>
      <p class="card-text"><i class="fa-solid fa-star star"></i>${movieRating}</p>
      </div>
    </div>
  </div>
  `;
    document.querySelector(".posterBox").append(temp);
  });
}

function searchFunc(movieArr) {
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
