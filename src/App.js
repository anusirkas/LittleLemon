import React from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';
import HomePage from './Homepage.js';
import OurStory from './OurStory';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';
import Menu from './Menu.js';
import LogIn from './LogIn.js';
import OrderOnline from './OrderOnline.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Combine imports from react-router-dom

function App() {
  return (
    // Wrap everything inside the BrowserRouter
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />

        {/* Define your Routes inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/orderOnline" element={<OrderOnline />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
