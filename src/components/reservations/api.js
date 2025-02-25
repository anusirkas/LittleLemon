const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  // 🔥 Ensure `date` is a Date object
  if (typeof date === "string") {
    console.warn("🔄 Converting string to Date:", date);
    date = new Date(date);
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error("❌ Invalid date passed to fetchAPI:", date);
    return [];
  }

  console.log("✅ Fetching API for date:", date.toISOString()); // Debugging log

  let result = [];
  let random = seededRandom(date.getDate()); // Seed random number with the date's day

  for (let i = 17; i <= 20; i++) { // Loop through hours from 17:00 to 20:00
    if (random() < 0.5) result.push(i + ":00"); // Add the hour slot (e.g., 17:00)
    if (random() < 0.5) result.push(i + ":30"); // Optionally add the half-hour slot (e.g., 17:30)
  }

  console.log("✅ Available times generated:", result); // Debugging log
  return result;
};

const submitAPI = (formData) => {
  console.log("✅ Form submitted with data:", formData);
  return true;
};

export { fetchAPI, submitAPI };
