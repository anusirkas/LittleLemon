import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container grid">
        <div className="hero-information">
        <h1 id="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <HashLink className="button-primary" to="/reservations" aria-label="Go to reservations page">
            Reserve a table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src="./images/restaurant-food.jpg"
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;