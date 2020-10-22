import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import ProvidedServices from '../ProvidedServices/ProvidedServices';
import SignificantClient from '../SignificantClient/SignificantClient';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className = "homepage-container">
            <div className = "header-container">
                <Navbar></Navbar>
                <HomePageHeader></HomePageHeader>
            </div>
            <SignificantClient></SignificantClient>
            <ProvidedServices></ProvidedServices>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <Footer></Footer>
            <div className="row bg-column">
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
            </div>
        </div>
    );
};

export default HomePage;