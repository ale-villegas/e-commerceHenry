
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Stack, Typography } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      
      <Stack direction="row" spacing={2}>
        <Button onClick={() => logout()} variant="contained" color="secondary">
          Log Out
        </Button>
      </Stack>
    </div>
  );
};

export default LogoutButton;
