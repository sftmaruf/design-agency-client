import React, { useContext, useEffect, useState } from 'react';
import { signedUserContext } from '../../../App';
import Order from '../Order/Order';
import './ServiceListCard.css';

const ServiceListCard = () => {
    const [servicesList, setServicesList] = useState([]);
    const [signedUser] = useContext(signedUserContext);

    useEffect(() => {
        fetch('https://design-agency-server.herokuapp.com/selectedServices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signedUser.email })
        })
            .then(res => res.json())
            .then(selectedServices => setServicesList(selectedServices))
    }, []);

    return (
        <Order title= "Service List">
            <div className="servicelist-container row d-flex justify-content-center pl-2">
                {
                    servicesList !== undefined &&
                    servicesList.map(service => {
                        return <div className="col-sm-12 col-md-4 col-lg-3 card servicelist-card m-3">
                            <div className='row d-flex justify-content-between m-3'>
                                <img col-sm-12 src={service.cardimage} className="rounded-circle" alt="..." />
                                <div style={{minWidth: '100px'}} col-sm-12 className="d-flex justify-content-center align-items-center alert alert-danger" role="alert">
                                    {service.state || "Pending" }
                            </div>
                            </div>
                            <div className="card-body pl-3">
                                <h5 className="card-title main-title"><strong>{service.service}</strong></h5>
                                <p className="card-text">{service.projectdetails}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </Order>
    );
};

export default ServiceListCard;