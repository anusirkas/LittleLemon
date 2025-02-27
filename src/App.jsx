import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import BookingPage from './components/reservations/BookingPage.jsx';
import HomePage from './components/Homepage.jsx';
import OurStory from './components/OurStory.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import LogIn from './components/LogIn.jsx';
import ConfirmedBooking from './components/reservations/ConfirmedBooking.jsx';
import Footer from './components/Footer.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav aria-label="Main navigation" />
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
