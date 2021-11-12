import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/myOrder?email=${user.email}`)
            .then(res => setOrders(res.data))
    },[]);


    console.log(orders);



    const handlerDelete = (id) => {
        const confermation = window.confirm('Are you sure to delete this order?');

        if(confermation){
            axios.delete(`http://localhost:5000/myOrder/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    alert('Order delete successfully');
                    const resResult = orders.filter(order => order._id !== id);
                    setOrders(resResult);
                }
            })
        }
    }

    return (

      
            <div>
                   <div className="container my-5 py-5">
                <div className="row justify-content-center">
                        <div className="text-center my-3">
                            <h2>My Order</h2>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                        </div>
                    <div className="col-md-8 cus-table">
                        <div style={{"width": "700px", "margin": "0 auto"}}>
                            <div className="ms-4 d-flex justify-content-around align-items-center" style={{"borderBottom": "2px solid gray"}}>
                                <h6>Title</h6>
                                <h6>Name</h6>
                                <h6>email</h6>
                            </div>
                            <div>
                                { 

                                        orders.length < 1 ? <div className="text-center">
                                        <h2 className="my-5 text-danger">No Order has been parches</h2>
                                        <Link className="cus-btn px-4 d-inline-block mb-3" to={`/home`}>Order Now</Link>
                                    </div>
                                    :
                                    orders.map(singleOrder => <div>
                                        <div className="card my-3 shadow">
                                            <div className="card-body d-flex justify-content-around align-items-center">
                                                <h6 className="card-title">{singleOrder.title}</h6>
                                                <h6 className="card-title">{singleOrder.name}</h6>
                                                <h6 className="card-title">{singleOrder.email}</h6>
                                                <button onClick={() => handlerDelete(singleOrder._id)} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        
           
        
    );
};

export default MyOrder;


{/* <ul>
                            {
                                orders.map(order => <li key={order._id}>{order.title} : {order.name} : {order.email} : <button onClick={() => handlerDelete(order._id)}>delete</button></li>)
                            }
                   </ul>  */}