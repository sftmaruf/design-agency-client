import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://design-agency-server.herokuapp.com/feedbackList')
            .then(res => res.json())
            .then(feedback => setFeedbacks(feedback));
    }, [])

    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-5'>
            <h4 className='text-dark mb-5' style={{ fontSize: '34px' }}><strong>Clients <span className='text-success'>Feedback</span></strong></h4>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    feedbacks.map(feedback => <FeedbackCard feedback={feedback}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedback;