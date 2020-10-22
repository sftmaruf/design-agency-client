import React from 'react';
import './CarouselLocal.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselLocal = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (
        <div>
            <Slider className='row' {...settings}>
                <div className='carousel-images col-md-2'>
                    <img style={{ width: '465px' }} src="https://iili.io/303iWN.png" alt="" />
                </div>
                <div className='carousel-images col-md-3'>
                    <img style={{ width: '465px' }} src="https://iili.io/303Pxp.png" alt="" />
                </div>
                <div className='carousel-images col-md-3'>
                    <img style={{ width: '465px' }} src="https://iili.io/3034bR.png" alt="" />
                </div>
                <div className='carousel-images col-md-3'>
                    <img style={{ width: '465px' }} src="https://iili.io/303rOv.png" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default CarouselLocal;