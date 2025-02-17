import React, { useState } from "react";
//import "./ControlledForm.css"; // Optional: Add specific styles if needed

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", name);
    setName(""); // Clear the input field
  };

  return (
    <div>
      <h1>Controlled Component Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name} // Controlled input value
              onChange={(e) => setName(e.target.value)} // Update state on input change
            />
          </div>
          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
