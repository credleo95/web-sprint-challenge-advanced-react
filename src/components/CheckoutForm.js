import React, { useState } from "react";
import { useForm } from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook


const CheckoutForm = () => {
  const [values, handleChange, onSubmit, showSuccessMessage ] = useForm(initialValue); 
  const {firstName, lastName, address, city, state, zip } = values; 
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2 data-testid="header">Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={handleChange} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={handleChange} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={handleChange} />
        </label>
        <button data-testid='checkout'>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
