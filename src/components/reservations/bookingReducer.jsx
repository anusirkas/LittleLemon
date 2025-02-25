import { fetchAPI } from "./api";

export const initializeTimes = () => {
  return fetchAPI(new Date().toISOString().split("T")[0]); // Get times for today
};

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return action.times ?? state; // ✅ Ensure times update correctly
  }
  return state;
}

