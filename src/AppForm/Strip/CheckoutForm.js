import React, { useCallback, useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';




// const stripePromise = loadStripe("pk_test_51P3MdBFs61mxxvZz3Lqn3aho9RTn8AJnPKUOOd6t3xkU5Jy8ewEKyhPTyLKSqEVowEvUvgjJgXxXOVJtPaj8LNqi00cJdP1UBx");
const stripePromise = loadStripe("pk_live_51P3MdBFs61mxxvZz3QYGbYXiiAZuxKa2PCyqq5sLxlbIdLYZAdGlxTTAGElLqwlGfGkJvyRxI1tNz5vDUsY7VHMU00gxAMbQPI");

const CheckoutForm = ({token}) => {
  const fetchClientSecret = useCallback(() => {
    return fetch("https://fincen.ccalerc.com/api/user/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [token]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutForm;