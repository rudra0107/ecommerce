import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51OyqEtSIwag8JXcbMIi6jyLfLCxKlWcNAyeCXVTEzb87T3vX2Npq2BxTVxjoeef9LSpWpSo3vxNtwPj6JDBBv85s00DtXiIBWQ";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce"
      billingAddress
      shippingAddress
      description={`Yout Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
