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
    let movieArr = response.results;

    // results 안에 배열 하나하나 돌면서 title, overview, rating, id 값 가져오기
    for (let i in movieArr) {
      // console.log(movieArr[i]);
      let movie = movieArr[i];
      let title = movie.title;
      let overview = movie.overview;

      // 10점을 별 다섯개로 표현할것이므로 나누기 2 해준 후에 반올림 해줬음
      // i.star 1점마다 1개 append, 가로정렬 ⭐️⭐️⭐️⭐️⭐️
      let rating = Math.round(movie.vote_average / 2);
      let id = movie.id;

      // console.log(title);
      // console.log(overview);
      // console.log(rating);
      // console.log(id);
    }
  })
  .catch((err) => console.error(err));
