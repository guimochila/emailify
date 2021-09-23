import * as React from 'react';
import { AuthProvider } from '../../context/auth';

const AppProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
