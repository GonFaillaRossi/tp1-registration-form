import React, { useState, useEffect } from 'react';
import '../MuiCustom.css';
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



const PasswordInput = ({
    showPassword,
    password,
    handleChange,
    handleShowPasswordClick,
    ...props
}) => {

    useEffect(()=> {
        console.log(props, "PROPS PASSOWRD")
    }, [])

    return (

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
                
               { ...props}
            />
            <FormHelperText style={{ visibility: 'hidden' }}>Hidden</FormHelperText>
        </FormControl>
    )



}

export default PasswordInput;