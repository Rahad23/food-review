import React, { useContext, useEffect, useState } from 'react';
import FeedbackCard from '../feedbackCard/FeedbackCard';
import { ProviderContext } from './../../../contextApi/ContextApi';

const CustomerMessage = () => {
    const {userData}= useContext(ProviderContext);
    // get feedback 
    const [feedback, setFeedback]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/comment')
        .then(res=>res.json())
        .then(data=>setFeedback(data));
    },[feedback])

    return (
        <div className='mt-14'>
            {
                feedback.map(feedback=><FeedbackCard key={feedback?._id} feedback={feedback}></FeedbackCard>)
            }

        </div>
    );
};

export default CustomerMessage;