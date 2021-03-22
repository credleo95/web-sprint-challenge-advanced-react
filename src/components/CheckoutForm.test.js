import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("Checkout Form Header renders", async () => {
    render(<CheckoutForm/>);
    const header = screen.getByTestId('header');
    expect(header).toBeValid()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>); 
    const button = screen.getByTestID('checkout');
    const success = screen.getByTestID('successMessage')
    userEvent.click(button);
    expect(success).toBeVisible(); 
});
