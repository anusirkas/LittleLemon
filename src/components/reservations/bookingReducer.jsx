import { fetchAPI } from "../api";

export const initializeTimes = () => {
  return fetchAPI(new Date().toISOString().split("T")[0]); // Get times for today
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date); // Fetch available times for new date
  }
  return state;
};
