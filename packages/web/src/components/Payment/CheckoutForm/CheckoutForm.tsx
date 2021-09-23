// @ts-nocheck
import * as React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { client } from '../../../utils/httpClient';

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const CheckoutForm: React.FC = () => {
  const [success, setSucess] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await client('payment', {
          body: {
            amount: 1000,
            id,
          },
        });

        if (response.success) {
          console.log('successful payment');
          setSucess(true);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement options={cardStyle} />
      </div>
      <button>Pay</button>
    </form>
  );
};

export default CheckoutForm;
