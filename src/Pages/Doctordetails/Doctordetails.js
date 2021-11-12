import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/UseAuth/UseAuth';
import axios from 'axios';

const Doctordetails = () => { 
    const {id} = useParams();
    const [service,setservice] = useState({});
    const {user} = useAuth();
    const {name, img, description    } = service;
    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.title = name;

        axios.post("http://localhost:5000/placeOrder", data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Order place successfully');
                    reset();
                }
            });
    };

    useEffect(()=>{
        
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setservice(data)
            console.log(data)});
    },[]);
    

    

    return (
        <div className="card mb-3 max-width: 540px;">
                    <div className="row d-flex">
                        <div className="col-md-4">
                            <img width="80%" src={img}  alt="..."/>
                            <br />
                            <br />
                            <p>{description}</p>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input style={{marginBottom:"10px"}} defaultValue={user.displayName} {...register("name")} /> <br />
                                <input style={{marginBottom:"10px"}} defaultValue={user.email} {...register("email")} /> <br /> 
                                
                                {/* include validation with required or other standard HTML validation rules */}
                                <input style={{marginBottom:"10px"}} {...register("address", { required: true })}  placeholder="Address"/>
                                {/* errors will return when field validation fails  */}
                                {errors.address && <span>This field is required</span>} <br />
                                
                                {/* include validation with required or other standard HTML validation rules */}
                                <input style={{marginBottom:"10px"}} {...register("phone", { required: true })} placeholder="Phone"/>
                                {/* errors will return when field validation fails  */}
                                {errors.phone && <span>This field is required</span>}
                                <br />
                                
                                <input type="submit" />
                            </form>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Doctordetails;