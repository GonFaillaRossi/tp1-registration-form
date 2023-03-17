import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
  Switch,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(4),
  marginBottom: (theme) => theme.spacing(4),
});

const FormTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(4),
});

const FormControlWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: (theme) => theme.spacing(2),
  marginBottom: (theme) => theme.spacing(2),
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
          <FormTitle variant="h4">Register</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormControlWrapper>
              <input
                type="text"
                hidden
              />
              <TextField
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={handleChange('firstName')}
                required
                variant="outlined"
                autoComplete="nope"
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <TextField
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={handleChange('lastName')}
                required
                variant="outlined"
                autoComplete="nope"
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
            />
            </FormControlWrapper>
            <FormControlWrapper>
            <TextField
              id="telephone"
              label="Telephone"
              value={telephone}
              onChange={handleChange('telephone')}
              required
              variant="outlined"
              autoComplete="nope"
            />
            </FormControlWrapper>
            <FormControlWrapper>
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={handleChange('password')}
              required
              variant="outlined"
              autoComplete="nope"
            />
            </FormControlWrapper>
            <FormControlWrapper>
            <TextField
              id="confirm-password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleChange('confirmPassword')}
              required
              variant="outlined"
              autoComplete="nope"
            />
            </FormControlWrapper>
            <Button type="submit">Register</Button>
          </form>
        </FormContainer>
        </Container>
      </ThemeProvider>
      );
    }
  
  export default RegistrationForm;



















  import React, { useState } from 'react';
import {
    createTheme,
    ThemeProvider,
    useTheme,
} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
    CssBaseline,
    Container,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    FormHelperText,
    Switch,
} from '@mui/material';
import {
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    formTitle: {
        marginBottom: theme.spacing(4),
    },
    formControl: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    switchContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

function RegistrationForm() {
    const classes = useStyles();
    const [theme, setTheme] = useState({
        palette: {
            type: 'light',
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleThemeChange = () => {
        const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
        setTheme({
            palette: {
                type: newPaletteType,
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
            password: '',
            confirmPassword: '',
        });
    };

    const { password, confirmPassword } = values;

    return (
        <ThemeProvider theme={createTheme(theme)}>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.switchContainer}>
                    <Typography>Light</Typography>
                    <Switch checked={theme.palette.type === 'dark'} onChange={handleThemeChange} />
                    <Typography>Dark</Typography>
                </div>
                <div className={classes.formContainer}>
                    <Typography variant="h4" className={classes.formTitle}>Register</Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleChange('password')}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPasswordClick}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText style={{ visibility: 'hidden' }}>Hidden</FormHelperText>
                        </FormControl>
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            required
                            variant="outlined"
                            className={classes.formControl}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPasswordClick}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button type="submit">Register</Button>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default RegistrationForm;