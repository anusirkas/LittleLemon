import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import PopularDishes from "./components/PopularDishes";
import ToDo from "./components/toDo";
import ControlledForm from "./components/ControlledForm"; // Import ControlledForm
import avatar from "./anusirkasprofilepicture2024.jpeg"; // avatar for Logo
import './App.css';
import FeedbackForm from "./components/FeedbackForm";
import SignUp from "./components/SignUp";
import BlogLogIn from "./components/BlogLogIn";
import { useTheme } from "./components/ThemeContext"; // Import ThemeContext
import Switch from "./components/Switch"; // Import the Switch component
import Goals from "./components/Goals"; //Import the Goals componenet
import GiftCard from "./components/GiftCard"
import EffectHook from "./components/useEffect";
import Fetch from "./components/FetchData";
import Wallet from "./components/Wallet";
import Search from "./components/SearchBar";
import CustomHook from "./components/CustomHook";
import Popup from "./components/Popup"
import LiveOrders from "./components/LiveOrders";
import LoginApp from "./components/Button";
import Cursor from "./components/Cursor";

const vidUrl = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4";

// Header component
function Header() {
  const { theme } = useTheme();
  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
      }}
    >
      <h1>Hello, Little Orange Restaurant</h1>
      <Switch />
    </header>
  );
}

//function Header() {
//  return <h1>Hello world</h1>;
//}

// Logo component
function Logo() {
  return <img src={avatar} alt="Profile" className="logo-image" />;
}

function App() {
  const { theme } = useTheme(); // Use ThemeContext to get theme
  // Initialize the todos state
  const [todos, setTodos] = useState([
    { id: "todo1", createdAt: "18:00" },
    { id: "todo2", createdAt: "21:00" },
  ]);

  // Function to reverse the order of todos
  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "#121212",
        color: theme === "light" ? "#000" : "#ccc",
      }}
    >
      <Header />
      <Logo />

      {/* Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/blog" className="nav-item">Blog</Link> {/* Add Blog link */}
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/blog" element={<BlogLogIn />} /> {/* Add BlogLogIn route */}
      </Routes>

      {/* React Player Example */}
      <h1>React Player example</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />

      {/* Popular Dishes */}
      <PopularDishes />

      {/* To-Do List */}
      <h1>To-Do List</h1>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>

      <ControlledForm /> {/* Use the ControlledForm component */}
      <FeedbackForm /> {/* Use the FeedbackForm component */}
      <SignUp /> {/* Use the FeedbackForm component */}
      <Goals />
      <GiftCard />
      <EffectHook />
      <Fetch />
      <Wallet />
      <Search />
      <CustomHook />
      <Popup />
      <LiveOrders />
      <LoginApp />
      <Cursor />

    </div>
  );
}

export default App;

