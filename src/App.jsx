import React from 'react';
import './index.css';
import Header from './components/Header.jsx';
import BookingPage from './components/reservations/BookingPage.jsx';
import HomePage from './components/Homepage.jsx';
import OurStory from './components/OurStory.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import LogIn from './components/LogIn.jsx';
import ConfirmedBooking from './components/reservations/ConfirmedBooking.jsx';
import Footer from './components/Footer.jsx';
import OrderOnline from './components/OrderOnline.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
