import React, { useContext } from 'react';
import './Footer.css';
import { useForm } from "react-hook-form";
import { signedUserContext } from '../../../App';


const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [signedUser, setSignedUser, token, setToken] = useContext(signedUserContext);

    const onSubmit = data => {
        data.image = signedUser.photoURL;
        data.designation = '';

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
        <div className='row footer-container'>
            <div className="d-flex flex-column align-items-center footer-left col-md-12 col-lg-4">
                <h2><strong> Let us handle your <br />project, professionally.</strong></h2>
                <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-lg-8 col-md-12  d-flex justify-content-center">
                <div className="col-md-12 col-lg-12 col-xl-8 d-flex justify-content-center align-items-center feedback-form mt-5">

                    <form className="feedback-form" onSubmit={handleSubmit(onSubmit)} >
                        <input className='form-control' name="email" defaultValue = {signedUser.email} ref={register} placeholder="Your email address" /><br />
                        <input className='form-control' name="name" defaultValue = {signedUser.name} ref={register({ required: true })} placeholder="Your name / company's name" /><br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <textarea className='form-control' name="description" ref={register({ required: true })} placeholder="Your message" /><br />
                        <input type="submit" className='btn btn-dark btn-lg' value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;