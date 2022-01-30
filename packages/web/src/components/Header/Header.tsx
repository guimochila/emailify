import * as React from 'react';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  styled,
  Stack,
  Chip,
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useUser, useAuth } from '../../context/auth';
import PaymentButton from '../Payment/PaymentButton/PaymentButton';

const Root = styled('div')(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: '1.5rem',
}));

const Header: React.FC = () => {
  const { logout } = useAuth();
  const user = useUser();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Emailify
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Avatar alt={user.name} src={user.photo} />
            <PaymentButton />
            <Chip
              icon={<AddShoppingCartIcon />}
              label={`Credits: ${user.credits}`}
            />
            <Button
              aria-label="logout"
              onClick={() => logout()}
              startIcon={<ExitToAppIcon />}
              color="inherit"
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Root />
    </>
  );
};

export default Header;
