import React, { useState } from 'react';
import './MuiCustom.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Typography,
  Button,
  Switch,
} from '@mui/material';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(4),
  marginBottom: (theme) => theme.spacing(4),
});

const FormTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(4),
  paddingBottom: 15,
});

const SwitchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(2),
  marginBottom: (theme) => theme.spacing(2),
});

function RegistrationForm() {
  const [theme, setTheme] = useState({
    palette: {
      mode: 'light',
    },
  });

  const handleThemeChange = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        mode: newPaletteType,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Container maxWidth="sm">
        <SwitchContainer>
          <Typography>Light</Typography>
          <Switch checked={theme.palette.mode === 'dark'} onChange={handleThemeChange} />
          <Typography>Dark</Typography>
        </SwitchContainer>
        <FormContainer>
        <FormTitle variant="h4">¡Bienvenido!</FormTitle>
          <form onSubmit={handleSubmit}>
            <Button type="submit">REGISTRARME</Button>
          </form>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
}

export default RegistrationForm;