import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://fierce-ridge-99046.herokuapp.com/services', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('added seccessfully');
                    reset();
                }
            })
    }
    return (
       <div className = 'add-service mt-5 mb-5'>
           
               <h2 className ='mb-5'>Add a Food</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder ='Name' />
                <textarea {...register("descriiption")} placeholder = 'description' />
                <input type="number" {...register("number")} placeholder = 'Price' />
                <input {...register("img")} placeholder = 'image url' />
                <input type="submit" />
            </form>
           
       </div>
    );
};

export default AddNewService;