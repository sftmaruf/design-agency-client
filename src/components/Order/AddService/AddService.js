import React, { useState } from 'react';
import Order from '../Order/Order';
import { useForm } from "react-hook-form";
import cloudicon from '../../../images/logos/cloud-upload-outline 1.png';

const AddService = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [selectedImage, setSelectedImage] = useState('');
    const [prompt, setPrompt] = useState(false);

    const onSubmit = (data) => {

        const newEvent = {
            name: data.title,
            description: data.description,
            image: selectedImage,
        }

        fetch('https://design-agency-server.herokuapp.com/addingService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
    }

    const handleUploadImages = e => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            imageString(reader.result);
            setPrompt('true')
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
        <Order title = "Add Service">
            <div className="col-md-12 col-lg-12 col-xl-8 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ width: '100%' }} className='row'>
                        <div className='col-md-6'>
                            <input className='form-control' name="title" ref={register} placeholder="Enter title" /><br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <textarea className='form-control' name="description" ref={register({ required: true })} placeholder="Enter Description" /><br />
                        </div>
                        <div className="col-md-6">
                            <input type="file" ref={register} name="file" id="file" class="inputfile" onChange={handleUploadImages} />
                            <label className="upload-label" for="file"><img id="cloud-icon" src={cloudicon} alt="" /> {prompt ? 'Uploading...' : 'Upload Image'}</label>
                        </div>
                    </div>

                    <input type="submit" className='btn btn-dark btn-lg' value='send' />
                </form>
            </div>
        </Order>
    );
};

export default AddService;