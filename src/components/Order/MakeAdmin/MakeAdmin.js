import React from 'react';
import { useForm } from 'react-hook-form';
import Order from '../Order/Order';

const MakeAdmin = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://design-agency-server.herokuapp.com/addingAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: data.email})
        })
            .then(res => res.json())
            .then(res => {
                document.getElementById('admin-form').reset();
            })
    }

    return (
        <Order title="Make Admin">
            <div className="col-md-12 col-lg-12 col-xl-8 mt-5">
                <label htmlFor="email"><strong>Email</strong></label>
                <form id = "admin-form" className='d-flex flex-row' onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name="email" ref={register} placeholder="something@gmail.com" />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" className='btn btn-dark ml-2' value='submit' />
                </form>
            </div>
        </Order>
    );
};

export default MakeAdmin;