import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import BookingPage from './components/reservations/BookingPage.jsx';
import HomePage from './components/Homepage.jsx';
import OurStory from './components/OurStory.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import LogIn from './components/LogIn.jsx';
import Footer from './components/Footer.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Combine imports from react-router-dom

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;