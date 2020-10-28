import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Order from '../Order/Order';
import './OrderForm.css';
import cloudicon from '../../../images/logos/cloud-upload-outline 1.png';
import { extractSessionStorage } from '../../Shared/SessionManagement/SessionManagement';
import { signedUserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const OrderForm = () => {

    const [signedUser] = useContext(signedUserContext);
    const { register, handleSubmit, errors } = useForm();
    const [selectedImage, setSelectedImage] = useState('');
    const [activeCard, setActiveCard] = useState({});
    const [prompt, setPrompt] = useState(false);

    useEffect(() => {
        const activeCard = extractSessionStorage('activecard');
        setActiveCard(activeCard || "");
    }, []);

    const history = useHistory();

    const onSubmit = (data) => {
        const order = {
            email: data.email,
            image: selectedImage,
            name: data.name,
            price: data.price,
            projectdetails: data.projectdetails,
            service: data.service,
            cardimage: activeCard.image,
            state: 'Pending'
        }

        fetch('https://design-agency-server.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    document.getElementById('order-form').reset();
                    if (extractSessionStorage('isAdmin') === true) {
                        history.push('/allServiceList');
                    } else {
                        history.push('/servicelist');
                    }
                }
            })
    }

    const handleUploadImages = e => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            imageString(reader.result);
            setPrompt('true');
        }
    }

    const imageString = (base64EncodedImage) => {
        fetch('https://design-agency-server.herokuapp.com/submitImage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: base64EncodedImage })
        })
            .then(res => res.json())
            .then(res => {
                setSelectedImage(res.url)
                alert('uploaded successfullty');
                setPrompt(false);
            });
    }

    return (
        <Order title="Order">
            <div className="col-md-12 col-lg-12 col-xl-8 d-flex justify-content-center align-items-center feedback-form mt-5">
                <form id='order-form' className = "order-form" onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name="name" defaultValue={signedUser.name} ref={register({ required: true })} placeholder="Your name/company's name" /><br />
                    <input className='form-control' name="email" defaultValue={signedUser.email} ref={register} placeholder="Your email address" /><br />
                    <input className='form-control' name="service" defaultValue={activeCard.name} ref={register} placeholder="Graphic Design" /><br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <textarea className='form-control' name="projectdetails" ref={register({ required: true })} placeholder="Project details" /><br />

                    <div className='row'>
                        <div className="col-md-6">
                            <input className='form-control' name="price" ref={register} placeholder="Price" /><br />
                        </div>
                        <div className="col-md-6">
                            <input type="file" ref={register} name="file" id="file" className="inputfile" onChange={handleUploadImages} />
                            <label className="upload-label" for="file"><img id="cloud-icon" src={cloudicon} alt="" /> {prompt ? 'Uploading...' : 'Upload Project File'}</label>
                        </div>
                    </div>
                    <input type="submit" className='btn btn-dark btn-lg' value='send' />
                </form>
            </div>
        </Order>
    );
};

export default OrderForm;