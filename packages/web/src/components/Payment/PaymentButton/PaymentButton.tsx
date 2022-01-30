import { Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

const PaymentButton: React.FC = () => {
  return (
    <div>
      <Link to="/payment">
        <Button color="inherit">Add Credits</Button>
      </Link>
    </div>
  );
};

export default PaymentButton;
