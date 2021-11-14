import React, { useState } from 'react';
import { Button, Spinner, Toast } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const LogIn = () => {
    const[loginData, setLoginData] = useState({})
    const{user, loginUser,signInGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    // const redirect_uri = location.state?.from || '/'


  
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }






    const handleGoogleLogIn = () => {
        signInGoogle(location, history)
            // .then(result => {
            //     history.push(redirect_uri)
            // })
    }

    return (
        <div>
             <div className ='login-form mt-5'>
                <div>
                    <h2 className='mb-5'>Log-In</h2>
                    <form onSubmit = {handleLoginSubmit}>
                        <input 
                        type="email" 
                        name="email" 
                        id="" 
                        onChange = {handleOnChange}
                        placeholder = 'Your Email' />
                        <br /> <br />

                        <input
                        type="password" 
                        name="password" 
                        id="" 
                        onChange = {handleOnChange}
                        placeholder = 'Your password' />
                        <br /><br />
                      

                        <Button type="submit" value="Submit" variant="outline-dark">Login</Button> <br />
                       
                        {user?.email && <Toast.Body>user create successfully!</Toast.Body> }
                        {authError && <Toast.Body>{authError}</Toast.Body> }
                        {isLoading && <Spinner animation="border" />} <br />
                    </form>

                    <p>new to Omega website? <Link style = {{textDecoration:'none'}} to = '/register'>Creat Account</Link></p>
                    <div>---------or------------</div>
                   <Button className ='mb-5' onClick = {handleGoogleLogIn} variant="outline-dark">Google Sign In</Button>
                </div>
           </div>
           
        </div>
    );
};

export default LogIn;



