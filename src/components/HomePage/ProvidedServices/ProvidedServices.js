import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ProvidedServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://design-agency-server.herokuapp.com/serviceList')
            .then(res => res.json())
            .then(service => setServices(service));
    }, [])

    return (
        <div className='d-flex flex-column align-items-center mt-5 pt-5'>
            <h4 style={{ fontSize: '34px' }}><strong>Provide awesome <span className='text-success'>services</span></strong></h4>
            <div className='row d-flex justify-content-center mt-5'>
                {
                    services.map(service => <ServiceCard name={service.name} description={service.description} image={service.image}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ProvidedServices;