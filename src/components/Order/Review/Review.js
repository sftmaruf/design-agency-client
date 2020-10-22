import React, { useContext, useEffect } from 'react';
import Order from '../Order/Order';
import { useForm } from "react-hook-form";
import { signedUserContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [signedUser, setSignedUser, token, setToken] = useContext(signedUserContext);

    const onSubmit = data => {
        data.image = signedUser.photoURL;
            
        fetch('https://design-agency-server.herokuapp.com/addingFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    document.getElementById('feedbackForm').reset();
                }
            })
    };

    return (
        <Order title = "Review">
            <div className="col-md-12 col-lg-12 col-xl-8 d-flex justify-content-center align-items-center feedback-form mt-5">

                <form id="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name="name" ref={register} placeholder="Your name" /><br />
                    <input className='form-control' name="designation" ref={register({ required: true })} placeholder="Company's name. Designation" /><br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <textarea className='form-control' name="description" ref={register({ required: true })} placeholder="Description" /><br />
                    <input type="submit" className='btn btn-dark btn-lg' value='Submit' />
                </form>
            </div>
        </Order>
    );
};

export default Review;