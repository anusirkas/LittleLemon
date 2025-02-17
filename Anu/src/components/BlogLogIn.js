import "../App.css"; // Navigate up one level to find App.css

import { useUser } from "./UserContext"; // Import useUser hook

const LoggedInUser = () => {
  const { user } = useUser();
  console.log("LoggedInUser - user:", user); // Debugging line
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is life?</h2>
      <p>
        blablablabalbalbalbbladb
        bldabdlasbd
        balbladblblblblbadlbalbdalbd
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

export default function BlogLogIn() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}
