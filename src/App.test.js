import { render, screen } from "@testing-library/react";
import BookingForm from "./components/reservations/BookingForm";
import { initializeTimes, updateTimes } from "./components/reservations/bookingReducer";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// ✅ Test for initializeTimes function
test("initializeTimes should return an array of available times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

// ✅ Test for updateTimes function
test("updateTimes should return the same state provided", () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE", date: "2023-12-12" };
  const newState = updateTimes(initialState, action);

  expect(newState).toEqual(initialState);
});
