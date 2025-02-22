import React from "react";
import BookingForm from "./BookingForm.jsx";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div>
      <h2>Reserve a Table</h2>
      <p>Book your table at Little Lemon easily.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
