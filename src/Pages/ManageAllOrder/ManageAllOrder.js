import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [updater, setUpdater] = useState();
    console.log(allOrder);

    useEffect(() => {
        axios.get('http://localhost:5000/allOrder')
            .then(res => setAllOrder(res.data));
    },[updater]);

    const handlerDeleteOrder = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete this item');

        if(confirmation){
            axios.get(`http://localhost:5000/order/deleteOrder/${id}`)
            .then(res => {
                console.log(res);
                if(res.data.deletedCount > 0){
                    const restData = allOrder.filter(sOrder => sOrder._id !== id);
                    setAllOrder(restData);
                }
            })
        }
    }

    const handlerUpdateStatus = (id, status) => {
        console.log(id, status);
        const data = { id: id, status: status };
        axios.post("http://localhost:5000/updateStatus", data)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    setUpdater(res);
                }
            })

    }
    return (
        <div className="my-5 py-5 container">
        <div className="text-center my-3">
            <h2>Mange All Orders</h2>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
        </div>
        <div className="table-responsive">
            <table className="table table-striped table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">District</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map(singleOrder => <tr key={singleOrder._id}>
                                <th scope="row">{singleOrder.name}</th>
                                <td>{singleOrder.email}</td>
                                <td>{singleOrder.phone}</td>
                                <td>
                                {singleOrder.status === 'pending' ?
                                    <span className="bg-warning p-1 rounded text-white d-inline-block">{singleOrder.status}</span>
                                :
                                    <span className="bg-success p-1 rounded text-white d-inline-block">{singleOrder.status}</span>
                                }
                                </td>
                                <td>{singleOrder.address}</td>
                                <td>
                                    <button onClick={() => handlerDeleteOrder(singleOrder._id)} className="btn btn-sm btn-outline-danger mx-1 mt-1">delete</button>
                                    <button onClick={() => handlerUpdateStatus(singleOrder._id, singleOrder.status)} className="btn btn-sm btn-outline-success mx-1 mt-1">status</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageAllOrder;