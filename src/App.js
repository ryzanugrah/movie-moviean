import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
// import Footer from './Footer';
// import About from './About';
// import ListMovies from './ListMovies';
// import ContactUs from './ContactUs';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" component={About} />
          <Route path="/list-movies" component={ListMovies} />
          <Route path="/contact-us" component={ContactUs} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
