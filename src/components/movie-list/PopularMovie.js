import React, { useState, useEffect } from 'react';
import { getPopularMovie, getSearchMovie } from '../../api/api';

import './PopularMovie.css';

const PopularMovie = () => {
  const imageURL = process.env.REACT_APP_IMAGE_URL;

  const [popularMovie, setPopularMovie] = useState([]);

  const popularMovieList = () => {
    getPopularMovie().then((e) => {
      setPopularMovie(e);
    });
  };

  useEffect(() => {
    popularMovieList();
  }, []);

  const searchMovie = async (q) => {
    if (q.length > 0) {
      const query = await getSearchMovie(q);
      setPopularMovie(query.results);
    } else if (q.length === 0) {
      popularMovieList();
    }
  };

  const MovieList = () => {
    return popularMovie.map((m, i) => {
      return (
        <div className="movie-card" key={i}>
          <img
            src={`${imageURL}/${m.poster_path}`}
            alt="Movie Poster"
            className="movie-image"
          ></img>
          <div className="movie-detail">
            <div className="movie-rate">⭐ {m.vote_average}</div>
            <div className="movie-title">{m.title}</div>
            <div className="movie-date">{m.release_date}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Find the movie ..."
          className="search-bar"
          onChange={({ target }) => searchMovie(target.value)}
        />
      </div>
      <main className="movie-container">
        <section className="movie-wrapper">
          <MovieList />
        </section>
      </main>
      {/* <footer></footer> */}
    </>
  );
};

export default PopularMovie;
