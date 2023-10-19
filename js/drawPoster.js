// poster 그려주기

export function drawFunc(movieArr) {
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
    let limitLength = 200;
    console.log(movieOverview.length);
    if (movieOverview.length >= limitLength) {
      movieOverview = movieOverview.substr(0, limitLength - 2) + "...";
    }

    if (!movieOverview) {
      movieOverview = "이 영화는 줄거리가 제공되지 않습니다.";
    }

    temp.innerHTML = `
      <div class="card bg-dark text-white">
      <div class='movieId'>${movieId}</div>
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
    // 모달 할지 말지 고민중
    temp.addEventListener("click", (e) => {
      alert(`해당 영화의 id => ${movieId}`);
    });
  });
}
