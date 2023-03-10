
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import Icons from '../shared/Icons';

function AppNotificationClose({ snackbarKey }: any) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton sx={{color: '#fff'}} onClick={() => closeSnackbar(snackbarKey)}>
      <Icons type="close" />
    </IconButton>
  );
}

export default AppNotificationClose;