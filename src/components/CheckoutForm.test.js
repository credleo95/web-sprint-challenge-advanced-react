import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />); 
    const header = screen.getByText(/checkout form/i); 
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", () => {
render(<CheckoutForm />);
const button = screen.getByText("Checkout"); 
userEvent.click(button)
const success = screen.getByTestId("successMessage");
expect(success).toBeVisible()

});
