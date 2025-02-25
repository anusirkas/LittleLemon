import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "../BookingPage";

describe("Booking page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  const submitData = jest.fn();

  test("should have one or more available reservation time options", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId("reservation-time-option");

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test("should update available reservation time options when changing reservation date", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const reservationDate = "2023-12-01";
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId(
      "reservation-time-option"
    );
    fireEvent.change(dateInput, { target: { value: reservationDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "reservation-time-option"
    );

    expect(dateInput).toHaveValue(reservationDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });

  test("should submit the booking form with valid data", () => {
    render(
      <MemoryRouter>
        <BookingPage submitData={submitData} />
      </MemoryRouter>
    );

    // Simulate user filling in the form
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByRole("button");

    // Fill out the form
    fireEvent.change(dateInput, { target: { value: "2023-12-05" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(numberOfGuestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if submitData function is called
    expect(submitData).toHaveBeenCalledWith({
      date: "2023-12-05",
      time: "18:00",
      numberOfGuests: 4,
      occasion: "Birthday",
    });
  });

  test("should disable submit button when form has invalid data", () => {
    render(
      <MemoryRouter>
        <BookingPage submitData={submitData} />
      </MemoryRouter>
    );

    // Simulate empty or invalid fields
    const submitButton = screen.getByRole("button");
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } }); // Invalid date
    fireEvent.blur(dateInput);

    expect(submitButton).toBeDisabled();
  });

  test("should show error message and disable submit button when number of guests is invalid", () => {
    render(
      <MemoryRouter>
        <BookingPage submitData={submitData} />
      </MemoryRouter>
    );

    // Simulate entering an invalid number of guests
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "0" } }); // Invalid input
    fireEvent.blur(numberOfGuestsInput);

    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    expect(submitButton).toBeDisabled();
  });

  test("should handle invalid future dates correctly", async () => {
    render(
      <MemoryRouter>
        <BookingPage submitData={submitData} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Date/);
    const futureDate = "2025-12-31"; // A future date (you can set the limit in your validation logic)
    
    fireEvent.change(dateInput, { target: { value: futureDate } });
    fireEvent.blur(dateInput);
    
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please choose a valid date");
    expect(submitButton).toBeDisabled();
  });
});
