import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
        const handleSubmit = jest.fn();
        render(<FeedbackForm onSubmit={handleSubmit} />);

        const rangeInput = screen.getByLabelText(/Score:/);
        fireEvent.change(rangeInput, { target: { value: "4" } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });
});
/* test scenario where the app verified that users who provided less than a score of 5 could only submit their form if feedback was also provided.



/* see test naitab, kas see Little Lemon Restaurant on tekstina kajastatud Appis
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a link that points to Little Lemon webpage", () => {
    render(<App />);
    const linkElement = screen.getByText("Little Lemon Restaurant");
    expect(linkElement).toBeInTheDocument(); 
});
    */