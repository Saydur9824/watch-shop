import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const [service, setService] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const url = `https://fierce-ridge-99046.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    },[])

     // update user
     const handleNameChange = e =>{
        const updatedName = e.target.value;
        const updatedUser = {name : updatedName, descriiption : service.descriiption}
        setService(updatedUser)
    }

    const handlemailChange = e => {
        const updatedEmail = e.target.value;
        // const updatedUser = {...user};
        // updatedUser.email = updatedEmail;
        const updatedUser = {name : service.name, descriiption : updatedEmail}
        setService(updatedUser)
    }

    const handleUpdateUser = e =>{
        const url = `https://fierce-ridge-99046.herokuapp.com/services/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type': 'application/json'
            },
            body :JSON.stringify(service)
        })
            .then(res =>res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    alert('Updated Successfully.')
                    setService({});
                }
            })

        e.preventDefault();

    }

    return (
        <div className = 'mt-5 mb-5'>
            <h1>Update food : {service.name}</h1>
            
            <form onSubmit = {handleUpdateUser}>
                <input type="text" placeholder = 'Food name' onChange = {handleNameChange} value = {service.name || ''} /> <br /> <br />
                <input type="text" placeholder = 'Description' onChange = {handlemailChange} value = {service.descriiption || ''} /> <br /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;