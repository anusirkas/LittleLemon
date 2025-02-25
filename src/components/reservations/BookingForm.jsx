import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import emailjs from "@emailjs/browser";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitForm }) => {
  const navigate = useNavigate();

  const minimumDate = new Date().toISOString().split("T")[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary", "Engagement", "Other"];

  return (
    <Formik
      initialValues={{
        name: "",
        mail: "",
        date: minimumDate,
        time: availableTimes?.[0] || "",
        numberOfGuests: minimumNumberOfGuests,
        occasion: occasions[0],
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) errors.name = "Please enter your name";
        else if (values.name.length < 2) errors.name = "Name must be at least 2 characters";

        if (!values.mail) errors.mail = "Please enter an email";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail))
          errors.mail = "Invalid email address";

        if (!values.date) errors.date = "Please choose a valid date";

        if (!values.time) errors.time = "Please choose a valid time";

        if (
          !values.numberOfGuests ||
          values.numberOfGuests < minimumNumberOfGuests ||
          values.numberOfGuests > maximumNumberOfGuests
        )
          errors.numberOfGuests = `Guests must be between ${minimumNumberOfGuests} and ${maximumNumberOfGuests}`;

        if (!values.occasion) errors.occasion = "Please choose a valid occasion";

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          emailjs
            .send(
              "service_8itxpe6",
              "template_vj18l5d",
              {
                from_name: "Little Lemon",
                user_email: values.mail,
                to_name: values.name,
                message: `You have a reservation on ${values.date} at ${values.time} for ${values.numberOfGuests} guests.`,
              },
              "oudjTkngFbimknqaW"
            )
            .then(() => console.log("✅ Email sent successfully"))
            .catch((error) => console.error("❌ Error sending email:", error));

          const success = await submitForm(values);

          if (!success) {
            console.error("❌ Form submission failed. Not navigating.");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid, // ✅ New: Use this to disable submit button when invalid
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormField label="Name" htmlFor="reservation-name">
            <input
              type="text"
              name="name"
              id="reservation-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              required
              minLength={2}
              aria-invalid={!!errors.name}
            />
            {errors.name && touched.name && <div className="error">{errors.name}</div>}
          </FormField>

          <FormField label="Email address" htmlFor="reservation-mail">
            <input
              type="email"
              name="mail"
              id="reservation-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mail}
              required
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
              aria-invalid={!!errors.mail}
            />
            {errors.mail && touched.mail && <div className="error">{errors.mail}</div>}
          </FormField>

          <FormField label="Date" htmlFor="reservation-date">
            <input
              type="date"
              name="date"
              id="reservation-date"
              min={minimumDate}
              onChange={(e) => {
                handleChange(e);
                const selectedDate = new Date(e.target.value); // 🔥 Convert string to Date
                dispatchOnDateChange(selectedDate); // ✅ Pass Date object
              }}
              onBlur={handleBlur}
              value={values.date}
              required
            />
            {errors.date && touched.date && <div className="error">{errors.date}</div>}
          </FormField>


          <FormField label="Time" htmlFor="reservation-time">
            <select
              name="time"
              id="reservation-time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
              required
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && touched.time && <div className="error">{errors.time}</div>}
          </FormField>

          <FormField label="Number of guests" htmlFor="reservation-number-guests">
            <input
              type="number"
              name="numberOfGuests"
              id="reservation-number-guests"
              min={minimumNumberOfGuests}
              max={maximumNumberOfGuests}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfGuests}
              required
            />
            {errors.numberOfGuests && touched.numberOfGuests && (
              <div className="error">{errors.numberOfGuests}</div>
            )}
          </FormField>

          <FormField label="Occasion" htmlFor="reservation-occasion">
            <select
              name="occasion"
              id="reservation-occasion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.occasion}
              required
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
            {errors.occasion && touched.occasion && <div className="error">{errors.occasion}</div>}
          </FormField>

          <button
            className="button-primary"
            type="submit"
            disabled={isSubmitting || !isValid} // ✅ Disabled if invalid
          >
            {isSubmitting ? "Processing..." : "Reserve now!"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default BookingForm;
