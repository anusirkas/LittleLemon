import { initializeTimes, updateTimes } from "./bookingReducer";
import { fetchAPI } from "../api";  // Import fetchAPI

jest.mock("../api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]), // Mock response
}));

test("initializeTimes should return available times from fetchAPI", () => {
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes should return new available times when date changes", () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-02-24" };
  const newState = updateTimes(initialState, action);
  
  expect(fetchAPI).toHaveBeenCalledWith("2025-02-24");
  expect(newState).toEqual(["17:00", "18:00", "19:00"]);
});
