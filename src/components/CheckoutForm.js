import React from "react";
import useForm from '../hooks/useForm';

// Initial value for object that represents the input fields
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = (props) => {
  

  const [values, handleChanges, handleSubmit, showSuccessMessage] = useForm(initialValue) // Custom Hook to handle changes and Success Message
  const {firstName, lastName, city, state, zip, address } = values // destructured values to easily type in stateful values.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
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
