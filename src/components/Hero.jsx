import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <HashLink className="button-primary" to="/reservations">
            Reserve a table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src="./images/restaurantfood.jpg"
          alt="Restaurant food"
          aria-label="A plate of delicious food served at Little Lemon restaurant"
        />
      </div>
    </section>
  );
};

export default Hero;