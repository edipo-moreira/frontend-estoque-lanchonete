import React from 'react';
import { ToggleThemeButton, AppBar, defaultTheme } from 'react-admin';
import { Typography } from '@mui/material';

const darkTheme = {
    palette: { mode: 'dark' },
};
<ToggleThemeButton darkTheme={darkTheme} />

const lightTheme = {
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
};
<ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />

export const MyAppBar = (props) => (
    <AppBar {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title"></Typography>
        <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={darkTheme}
        />
    </AppBar>
);