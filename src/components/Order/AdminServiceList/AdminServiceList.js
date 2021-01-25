import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Selector from '../Selector/Selector';
import './AdminServiceList.css';

const AdminServiceList = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [id, setID] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(orderDetails => setOrderDetails(orderDetails));
    }, [])

    const handleChangeState = (options) => {
        const data = {
            id: id,
            state: options.value
        }

        fetch('http://localhost:5000/updateOrderState', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    const handleStateUpdate = (details) => {
        setID(details._id);
    }

    return (
        < Order >
            <div id='table-view-container'>
                <div id="table-rows" className='table-header'>
                    <div className="col-2">
                        Name
                    </div>
                    <div className="col-3">
                        Email ID
                    </div>
                    <div className="col-1">
                        Service
                    </div>
                    <div className="col-2">
                        Project Details
                    </div>
                    <div className="col-2">
                        Status
                    </div>
                </div>

                {
                    orderDetails.map(details => {
                        return <div id='table-rows' className=' row'>
                            <div className="col-2">
                                {details.name}
                            </div>
                            <div className="col-3">
                                {details.email}
                            </div>
                            <div className="col-1">
                                {details.service}
                            </div>
                            <div className="col-2">
                                {details.projectdetails}
                            </div>
                            <div onClick={() => handleStateUpdate(details)} className="state-selector col-2">
                                <Selector style={{border: "1px solid red"}} id="state-selector" handleChangeState={handleChangeState}  orderDetails={details}></Selector>
                            </div>
                        </div>
                    })
                }
            </div>
        </Order >
    );
};

export default AdminServiceList;