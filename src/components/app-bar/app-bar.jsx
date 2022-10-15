import React from 'react';
import { ToggleThemeButton, AppBar, defaultTheme } from 'react-admin';
import { Typography } from '@mui/material';

const darkTheme = {
    palette: { mode: 'dark' },
};

export const MyAppBar = (props) => (
    <AppBar  sx={{
        backgroundColor: "#2a2a2a",
        "& .RaDatagrid-headerCell": {
            backgroundColor: "#2a2a2a",
        },
    }} {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title"></Typography>
        <ToggleThemeButton
            darkTheme={darkTheme}
        />
    </AppBar>
);