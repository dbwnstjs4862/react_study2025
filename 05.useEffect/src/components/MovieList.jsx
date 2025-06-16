import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

  const today = new Date();
  const yesterdaysDate = new Date(today.setDate(today.getDate() - 1)) // 어제 날짜
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, ''); // yyyyMMdd 형식

  const MOVIE_URL = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${yesterdaysDate}`;

  const getMovieData = async () => {
    try {
      const res = await axios.get(MOVIE_URL);
      setMovies(res.data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      console.error('영화 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <h1>영화 순위</h1>

        {movies.map((movie) => (
          <h4 key={movie.movieCd}>
            {movie.rank}.{movie.movieNm} ({movie.openDt})
          </h4>
        ))}
    </div>
  );
};

export default MovieList;
