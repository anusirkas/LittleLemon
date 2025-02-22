import { HashLink } from "react-router-hash-link";
import "./Specials.css";
import MealCard from "./MealCard";

const meals = [
    {
      name: "Greek Salad",
      image: "/images/greek salad.jpg", // Path relative to the `public` folder
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, olives and
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.`,
    },
    {
      name: "Bruschetta",
      image: "/images/bruschetta.svg", // Path relative to the `public` folder
      price: "$6.79",
      description: `Our Bruschetta is made from grilled bread that has been
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: "Lemon Dessert",
      image: "/images/lemon dessert.jpg", // Path relative to the `public` folder
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last
        ingredient has been sourced and is as authentic as can be imagined.`,
    },  
];


  const Specials = () => {
    return (
      <section className="container grid week-specials" id="menu">
        <div className="week-specials-header">
          <h2>This week specials!</h2>
          <HashLink className="button-primary" to="/#menu">
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