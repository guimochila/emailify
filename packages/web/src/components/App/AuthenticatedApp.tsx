import * as React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';

import StripeContainer from '../StripeContainer/StripeContainer';
const Dashboard = () => <h2>Javascript Engineer</h2>;
const Survey = () => <h2>Frontend Engineer</h2>;
const Landing = React.lazy(() => import('../../pages/Landing'));

const AuthenticatedApp: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Router>
        <>
          <Header />
          <React.Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path="/survey" component={Survey} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/payment" component={StripeContainer} />
              <Route exact path="/" render={() => <Landing />} />
            </Switch>
          </React.Suspense>
        </>
      </Router>
    </Container>
  );
};

export default AuthenticatedApp;
