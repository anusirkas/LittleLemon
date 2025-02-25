import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { MemoryRouter } from "react-router-dom";


describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("should correctly render all fields and their default values", async () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          submitData={submitData}
        />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId("reservation-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId("reservation-occasion-option");
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "reservation-date");
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "reservation-time");
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute("id", "reservation-number-guests");
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "reservation-occasion");
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should have required attributes on form fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);

    expect(dateInput).toHaveAttribute("required");
    expect(numberOfGuestsInput).toHaveAttribute("required");
    expect(numberOfGuestsInput).toHaveAttribute("min", "1");
    expect(numberOfGuestsInput).toHaveAttribute("max", "10");
  });

  test("should successfully submit form with valid inputs", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "2025-02-26" } });

    const timeSelect = screen.getByLabelText(/Time/);
    fireEvent.change(timeSelect, { target: { value: availableTimes[1] } });

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });

    const occasionSelect = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: "2025-02-26",
      time: availableTimes[1],
      numberOfGuests: 3,
      occasion: "Anniversary",
    });
  });

  test("should display error message and disable submit button when number of guests is out of range", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "11" } });
    fireEvent.blur(numberOfGuestsInput);

    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    expect(submitButton).toBeDisabled();
  });

  test("should disable submit button when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const submitButton = screen.getByRole("button");
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);

    expect(submitButton).toBeDisabled();
  });
});