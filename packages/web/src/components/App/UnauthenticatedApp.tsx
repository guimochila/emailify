import * as React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../../pages/Landing';
import UnauthenticatedHeader from '../Header/UnauthenticatedHeader';

const UnauthenticatedApp: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Router>
        <>
          <UnauthenticatedHeader />
          <React.Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="*" component={Landing} />
            </Switch>
          </React.Suspense>
        </>
      </Router>
    </Container>
  );
};

export default UnauthenticatedApp;
