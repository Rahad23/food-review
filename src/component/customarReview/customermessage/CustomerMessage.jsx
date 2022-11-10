import React, { useContext, useEffect, useState } from 'react';
import FeedbackCard from '../feedbackCard/FeedbackCard';
import { ProviderContext } from './../../../contextApi/ContextApi';

const CustomerMessage = ({ id }) => {
    // console.log(id)
    const { userData } = useContext(ProviderContext);
    // get feedback 
    const [feedback, setFeedback] = useState([]);
    // console.log(feedback);
    useEffect(() => {
        fetch(`http://localhost:5000/comment/${id}`)
            .then(res => res.json())
            .then(data => setFeedback(data));
    }, [feedback])

    return (
        <div className='mt-14'>
            {
                feedback.map(feedback => <FeedbackCard key={feedback?._id} feedback={feedback}></FeedbackCard>)
            }

        </div>
    );
};

export default CustomerMessage;