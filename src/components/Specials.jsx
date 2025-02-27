import { HashLink } from "react-router-hash-link";
import "./Specials.css";
import MealCard from "./MealCard";

const meals = [
    {
      name: "Greek Salad",
      image: "/images/greek salad.jpg",
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, olives and
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.`,
    },
    {
      name: "Bruschetta",
      image: "/images/bruschetta.svg",
      price: "$6.79",
      description: `Our Bruschetta is made from grilled bread that has been
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: "Lemon Dessert",
      image: "/images/lemon dessert.jpg",
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last
        ingredient has been sourced and is as authentic as can be imagined.`,
    },  
];

const Specials = () => {
  return (
    <section className="container grid week-specials" id="menu" aria-labelledby="week-specials-title">
      <div className="week-specials-header">
        <h2 id="week-specials-title">This week’s specials!</h2>
        <HashLink className="button-primary" to="/#menu" aria-label="View full menu online">
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default Specials;
