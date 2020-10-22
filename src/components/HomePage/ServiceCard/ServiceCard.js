import React from 'react';
import { useHistory } from 'react-router-dom';
import { pushSessionStorage } from '../../Shared/SessionManagement/SessionManagement';
import './ServiceCard.css';

const ServiceCard = ({ name, description, image }) => {
    const history = useHistory();

    const handleServiceCardClick = () => {
        const activecard = {
            name: name,
            image: image
        }
        pushSessionStorage('activecard', activecard);
        history.push('/order')
    }

    return (
        <div onClick = {handleServiceCardClick} className="col-sm-12 col-md-4 col-lg-3 card-border-less m-3">
            <div className='row d-flex justify-content-center m-3'>
                <img col-12 src={image} className="rounded-circle" alt="..." />
                <div className="col-12">
                    <h2 className="main-title text-center"><strong>{name}</strong></h2>
                </div>
            </div>
            <div className="card-body pl-3">
                <p className="card-text text-center">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;