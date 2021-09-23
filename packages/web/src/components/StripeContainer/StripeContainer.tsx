import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../Payment/CheckoutForm/CheckoutForm';

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

if (!stripeKey) {
  throw new Error(
    'Stripe key not found. Please, set key in REACT_APP_STRIPE_KEY',
  );
}

const promise = loadStripe(stripeKey);

const StripeContainer: React.FC = () => {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
