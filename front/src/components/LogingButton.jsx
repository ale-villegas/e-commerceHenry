
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
     
      <Stack direction="row" spacing={2}>
        <Button onClick={() => loginWithRedirect()} variant="contained" color="primary">
          Log In
        </Button>
      </Stack>
    </div>
  );
};

export default LoginButton;
