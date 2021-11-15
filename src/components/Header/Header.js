import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark pt-4 pb-4" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Omega</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    
                    
                    
                    {user?.email ?
                        <Box>
                        <NavLink  to = '/dashboard'>
                        <Button style = {{textDecoration : 'none', color: 'blue'}} variant="dark">Dashboard</Button>
                        </NavLink>
                        <Button style = {{textDecoration : 'none', color: 'blue'}} onClick={logOut} variant="dark">Logout</Button>
                        </Box>  
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        
                    <Navbar.Text>
                        <a style = {{textDecoration : 'none', color: 'white'}} href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
       
    );
};

export default Header;