import * as React from 'react';
import { useAuth } from '../../context/auth';
import FullPageSpinner from '../FullPageSpinner/FullPageSpinner';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App: React.FC = () => {
  const { user } = useAuth();
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

export default App;
