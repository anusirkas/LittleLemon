import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI } from "../api";
import { initializeTimes, updateTimes } from "./bookingReducer";

function BookingPage() {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, []);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the times when the component mounts and dispatch them into the reducer
    async function loadTimes() {
      const times = await fetchAPI();
      dispatchOnDateChange({ type: "UPDATE_TIMES", times });
    }

    loadTimes();
  }, []); // Run only once when the component mounts

  // ✅ Form submission logic (moved from Main.jsx)
  const submitForm = async (formData) => {
    const response = await submitAPI(formData); // Simulate API request
    if (response) {
      navigate("/confirmed", { state: formData }); // ✅ Navigate to confirmation page
    }
  };

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
