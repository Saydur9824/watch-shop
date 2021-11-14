import React, { useState } from 'react';
import { Button, Spinner, Toast } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const[loginData, setLoginData] = useState({})
    const{user, registerUser, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value, newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('password not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
             <div className ='login-form mt-5'>
                <div>
                    <h2 className = 'mb-4'>Register</h2>
                    {!isLoading &&<form onSubmit = {handleLoginSubmit}>
                        <input  
                        name="name" 
                        id="" 
                        onBlur = {handleOnBlur}
                        placeholder = 'Your Name' />
                        <br /> <br />
                        <input 
                        type="email" 
                        name="email" 
                        id="" 
                        onBlur = {handleOnBlur}
                        placeholder = 'Your Email' />
                        <br /> <br />

                        <input
                        type="password" 
                        name="password" 
                        id="" 
                        onBlur = {handleOnBlur}
                        placeholder = 'Your password' />
                        <br /><br />
                        <input
                        type="password" 
                        name="password2" 
                        id="" 
                        onBlur = {handleOnBlur}
                        placeholder = 'Retype password' />
                        <br /><br />
                      
                        <Button type="submit" value="Submit" variant="outline-dark">Register</Button>
                    </form>}
                    {isLoading && <Spinner animation="border" />} <br />
                    {user?.email && <Toast.Body>user create successfully!</Toast.Body> }
                    {authError && <Toast.Body>{authError}</Toast.Body> }

                    <p>Already registered? <Link style = {{textDecoration:'none'}} to = '/login'>Please Login</Link></p>
                    
                </div>
           </div>
           
        </div>
    );
};

export default Register;