import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51JBw1kDysDKRkn9t0xcUwd4fLaASlS8SFId8uoYjvBpFtEtfwodAUe5t049ZEBuummlBIwW9Y8SSFZKRwDmKxDuu006PvGnYXC';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
}

export default StripeButton;
