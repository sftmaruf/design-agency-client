import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Feedback from '../Feedback/Feedback';

const FeedbackCard = (props) => {

    const { name, designation, description, image } = props.feedback;

    return (
        <div className="col-sm-12 col-md-4 col-lg-3 card feedback-card m-3">
            <div className='row d-flex justify-content-start m-3'>
                <div className="col-sm-4" >
                    <img src={image} className="rounded-circle" alt="..." />
                </div>
                <div className="col-sm-8">
                    <h2 className="main-title text-wrap"><strong>{name}</strong></h2>
                    <h5 className="second-title"><strong>{designation}</strong></h5>
                </div>
            </div>
            <div className="card-body pl-3">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;