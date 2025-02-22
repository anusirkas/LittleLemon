import React, { useReducer } from "react";
import BookingPage from "./reservations/BookingPage";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return state; // For now, return the same times (later, this will change)
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;
