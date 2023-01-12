import React from 'react';

import PopularMovie from '../../components/movie-list/PopularMovie';

import '../../App.css';

const Home = () => {
  return (
    <>
      <header className="app-header">
        {/* <nav></nav> */}
        <h1>Movie-Moviean</h1>
      </header>
      <PopularMovie />
    </>
  );
};

export default Home;
