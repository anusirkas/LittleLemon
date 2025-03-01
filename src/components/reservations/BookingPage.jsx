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
    <section className="reservations">
      {/* Ensure the page title is well defined for screen readers */}
      <h1>Book a Table</h1>

      {/* Remove the ARIA live region for the message */}
      {/* <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        <p>{availableTimes.length ? "Available times have been updated." : "Fetching available times..."}</p>
      </div> */}

      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm} // ✅ Using submitForm properly
      />
    </section>
  );
}

export default BookingPage;
