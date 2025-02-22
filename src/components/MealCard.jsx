import { faMotorcycle } from "@fortawesome/free-solid-svg-icons"; // Import the motorcycle icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { HashLink } from "react-router-hash-link"; // Import the HashLink component for smooth scrolling links
import "./MealCard.css"; // Import your CSS

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <HashLink to="/orderOnline">
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </HashLink>
      </div>
    </article>
  );
};

export default MealCard;