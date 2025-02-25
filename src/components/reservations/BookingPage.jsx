import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI } from "./api";
import { initializeTimes, updateTimes } from "./bookingReducer";

function BookingPage() {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, initializeTimes());


  const navigate = useNavigate();

  useEffect(() => {
    async function loadTimes() {
      const today = new Date(); // Ensure we pass a valid Date object
      console.log("📅 Calling fetchAPI with date:", today);

      const times = await fetchAPI(today);
      console.log("⏰ Times received from fetchAPI:", times);

      dispatchOnDateChange({ type: "UPDATE_TIMES", times });
    }

    loadTimes();
  }, []);

  
  // ✅ Form submission logic (moved from Main.jsx)
  const submitForm = async (formData) => {
    const response = await submitAPI(formData); // Simulate API request
    if (response) {
      navigate("/confirmed", { state: formData }); // ✅ Navigate to confirmation page
    }
  };


  // ✅ Debugging availableTimes
  console.log("Available times:", availableTimes);

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm} // ✅ Using submitForm properly
      />
    </main>
  );
}

export default BookingPage;
