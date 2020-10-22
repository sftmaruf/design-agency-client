import React from 'react';
import CarouselLocal from '../CarouselLocal/CarouselLocal';

const OurWorks = () => {
    return (
        <div style = {{height: '724px', backgroundColor: '#111430', overflow: 'hidden'}} className = 'd-flex flex-column align-items-center justify-content-center p-5 mt-5'>
            <h4 className='text-light mb-5' style={{ fontSize: '34px' }}><strong>Here are some of <span className='text-success'>our works</span></strong></h4>
            <CarouselLocal></CarouselLocal>
        </div>
    );
};

export default OurWorks;