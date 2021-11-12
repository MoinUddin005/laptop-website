import React from 'react';
import { Link } from 'react-router-dom';

const img="https://i.ibb.co/QdP32KL/2446911-ai.png";

const Notfound = () => {
    return (
        <div>
            <img style={{width: "100%"}} src={img} alt="" />
            <Link to="/home"><button className=" mb-lg-5 btn btn-success">Go To Home</button></Link>
        </div>
    );
};

export default Notfound;