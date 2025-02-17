import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Adjust if App isn't in the same directory
import "./index.css"; // Assuming index.css is correctly imported
import { UserProvider } from "./components/UserContext"; // Correct path to UserContext
import { ThemeProvider } from "./components/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </ThemeProvider>
);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
 // <UserProvider> {/* Wrap the entire app with UserProvider */}
   // <BrowserRouter>
     // <App />
    //</BrowserRouter>
  //</UserProvider>
//);
