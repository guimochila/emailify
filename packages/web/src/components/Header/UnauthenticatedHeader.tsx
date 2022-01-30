import * as React from 'react';
import { AppBar, Button, Toolbar, Typography, styled } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: '1.5rem',
}));

const UnauthenticatedHeader: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Emailify
          </Typography>
          <Button
            color="inherit"
            href={`${process.env.REACT_APP_AUTH_URL}/auth/google`}
          >
            Login with Google
          </Button>
        </Toolbar>
      </AppBar>
      <Root />
    </>
  );
};

export default UnauthenticatedHeader;
