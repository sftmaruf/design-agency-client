import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import ProvidedServices from '../ProvidedServices/ProvidedServices';
import SignificantClient from '../SignificantClient/SignificantClient';

const HomePage = () => {
    return (
        <div>
            <div className = "header-container">
                <Navbar></Navbar>
                <HomePageHeader></HomePageHeader>
            </div>
            <SignificantClient></SignificantClient>
            <ProvidedServices></ProvidedServices>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;