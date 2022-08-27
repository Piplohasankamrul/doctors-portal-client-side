import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MedicationIcon from '@mui/icons-material/Medication';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MedicationIcon />
                    </IconButton>
                    
                        <Link style={{ textDecoration: "none", color: "white",fontWeight:600 ,fontSize: '20px'}} to="/">
                            Doctors Portal
                        </Link>
                    
                    
                    <Box sx={{marginLeft:"auto" ,display:'flex'}}>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/appointment"><Button color="inherit">Appointment</Button></Link>
                    {
                        user?.email ?
                        <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;