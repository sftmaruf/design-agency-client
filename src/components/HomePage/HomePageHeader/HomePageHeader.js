import React from 'react';
import './HomePageHeader.css';
import banner from '../../../images/logos/Frame.png';
import { useHistory } from 'react-router-dom';

const HomePageHeader = () => {
    const history = useHistory();

    return (
        <>
            <div className="row header-container">
                <div style={{ width: '100%' }} className="row header-text">
                    <div className="d-flex flex-column align-items-center col-lg-6 col-md-12">
                        <div>
                            <h2>Let's Grow Your <br />Brand To The Next Level</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat</p>
                            <button onClick = {() => history.push('/order')} type="button" class="btn btn-dark">Hire us</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-lg-6 col-md-12">
                        <img className="header-banner" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageHeader;