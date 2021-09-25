import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className='nav'>
                        <NavLink to='/' exact activeStyle={{ color: '#a3a3a3' }}>Contacts</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='nav'>
                        <NavLink to='/addContact' activeStyle={{ color: '#a3a3a3' }}>Add new Contact</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
