import "./TestimonialCard.css";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card" aria-labelledby={`testimonial-${customer.fullName.replace(/\s+/g, '-')}`}>
      <img src={customer.image} alt={`Photo of ${customer.fullName}`} />
      <h4 id={`testimonial-${customer.fullName.replace(/\s+/g, '-')}`}>{customer.fullName}</h4>

      <span aria-label={`Customer rating: ${customer.rating.reduce((acc, curr) => acc + curr, 0)} out of 5 stars`}>
        {customer.rating.map((ratingPoint, idx) =>
          ratingPoint === 1 ? (
            <IoMdStar key={idx} aria-hidden="true" />
          ) : ratingPoint === 0.5 ? (
            <IoMdStarHalf key={idx} aria-hidden="true" />
          ) : (
            <IoMdStarOutline key={idx} aria-hidden="true" />
          )
        )}
        <p>
          {customer.rating.reduce((acc, curr) => acc + curr, 0)} / 5
        </p>
      </span>

      <blockquote aria-label="Customer review">
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
