import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  // Redirect back to reservations if formData is missing
  useEffect(() => {
    if (!formData) {
      navigate("/reservations");
    }
  }, [formData, navigate]);

  if (!formData) return null; // Prevent rendering if no data

  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your table has been reserved!</h2>
      <p>You'll receive a confirmation email with all the details.</p>
      <div className="reservation-summary">
        <h3>Booking Details</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.mail}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        <p><strong>Number of Guests:</strong> {formData.numberOfGuests}</p>
        <p><strong>Occasion:</strong> {formData.occasion}</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
