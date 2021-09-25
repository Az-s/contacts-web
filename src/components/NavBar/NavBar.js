import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Pizzeria
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='nav'>
                        <NavLink to='/' exact activeStyle={{ color: '#c6cacc' }}>Contacts</NavLink>
                        <NavLink to='/addContact' activeStyle={{ color: '#c6cacc' }}>Add new Contact</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
