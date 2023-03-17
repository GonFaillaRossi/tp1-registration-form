import React, { useState, useEffect } from 'react';
import './MuiCustom.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Switch,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import PasswordInput from "./components/GenericPasswordInput"


const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(4),
  marginBottom: (theme) => theme.spacing(4),
});

const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
  color: theme.palette.mode === 'light' ? '#fff' : '#272727',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#1565c0' : '#64b5f6',
  },
}));

const FormControlWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(2),
  marginBottom: (theme) => theme.spacing(2),
  paddingBottom: (theme) => theme.spacing(1),
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
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
  });


  useEffect(() => {

    //

  }, [values] )

  const handleThemeChange = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        mode: newPaletteType,
      },
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName } = values;
    alert(`Registration successful for ${firstName} ${lastName}!`);
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      password: '',
      confirmPassword: '',
    });
  };

  const { firstName, lastName, email, telephone, password, confirmPassword } = values;

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
            <FormControlWrapper>
              <input
                type="text"
                hidden
              />
              <TextField
                id="firstName"
                label="Nombre"
                value={firstName}
                onChange={handleChange('firstName')}
                required
                variant="outlined"
                autoComplete="nope"
                sx={{
                  mb: 2,
                  pb: 1
                }}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <TextField
                id="lastName"
                label="Apellido"
                value={lastName}
                onChange={handleChange('lastName')}
                required
                variant="outlined"
                autoComplete="nope"
                sx={{
                  mb: 2,
                  pb: 1
                }}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <TextField
                id="email"
                label="Email"
                value={email}
                onChange={handleChange('email')}
                required
                variant="outlined"
                autoComplete="nope"
                sx={{
                  mb: 2,
                  pb: 1
                }}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <TextField
                id="telephone"
                label="Teléfono"
                value={telephone}
                onChange={handleChange('telephone')}
                required
                variant="outlined"
                autoComplete="nope"
                sx={{
                  mb: 2,
                  pb: 1
                }}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <FormControl
                variant="outlined"
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleChange('password')}
                  required
                  autoComplete="nope"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPasswordClick}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <FormHelperText style={{ visibility: 'hidden' }}>Hidden</FormHelperText>
              </FormControl>
            </FormControlWrapper>
            <FormControlWrapper variant="outlined">
              <FormControl variant="outlined">
                <InputLabel htmlFor="confirm-password">Confirmar Password</InputLabel>
                <OutlinedInput
                  id="confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  required
                  autoComplete="nope"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPasswordClick}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
                <FormHelperText style={{ visibility: 'hidden' }}>Hidden</FormHelperText>
              </FormControl>
            </FormControlWrapper>
            <FormControlWrapper>
              <PasswordInput
                showPassword={showPassword}
                password={password}
                handleChange={handleChange}
                handleShowPasswordClick={handleShowPasswordClick}
              />
            </FormControlWrapper>
            <SubmitButton type="submit">REGISTRARME</SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
}

export default RegistrationForm;