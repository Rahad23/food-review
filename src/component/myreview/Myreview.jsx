import React, { useContext, useEffect, useState } from 'react';
import { ProviderContext } from './../../contextApi/ContextApi';
import ReviewCard from './myReviewCard/ReviewCard';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from './../../titleChangeHook/UseTitleChange';

const Myreview = () => {
    useTitle("My-Review");
    const navigate = useNavigate();
    const { userData } = useContext(ProviderContext);
    console.log(userData);

    const email = {
        email: userData?.email
    };

    if (userData?.email) {
        fetch('https://cooking-server-rahad23.vercel.app/jwt', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('key', data.token);

                // console.log(data)
            })
    }

    const [feedBack, setFeedback] = useState([]);
    // console.log(feedBack);
    useEffect(() => {
        if (userData?.email) {
            fetch(`https://cooking-server-rahad23.vercel.app/userReview/${userData?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('key')}`,
                }
            })
                .then(res => res.json())
                .then(data => setFeedback(data))
        }

    }, [feedBack, userData?.email])
    if (!(userData?.email)) {
        return navigate('/login');
    }
    return (
        <div className='mt-20 container mx-auto'>

            {feedBack.length > 0 ?
                feedBack.map(data => <ReviewCard key={data?._id} data={data}></ReviewCard>)
                :
                <h1 className='text-black font-semibold text-center'>No review where added <Link to={'/allFood'} className='text-red-500' title='Go review page'>Please add Review</Link></h1>
            }

        </div>
    );
};

export default Myreview;