import React, { useContext, useEffect, useState } from 'react';
import { ProviderContext } from './../../contextApi/ContextApi';
import ReviewCard from './myReviewCard/ReviewCard';
import { Link } from 'react-router-dom';
import useTitle from './../../titleChangeHook/UseTitleChange';

const Myreview = () => {
    useTitle("My-Review");
    const {userData} = useContext(ProviderContext);
    // console.log(userData);

    const [feedBack, setFeedback] = useState([]);
    
    useEffect(()=>{
         fetch(`http://localhost:5000/userReview/${userData?.email}`)
        .then(res=>res.json())
        .then(data=>setFeedback(data))
    },[feedBack])

    return (
        <div className='mt-20 container mx-auto'>
            
        {  feedBack.length > 0 ? 
                  feedBack.map(data=><ReviewCard key={data?._id} data={data}></ReviewCard>)
                :
            <h1 className='text-black font-semibold text-center'>No review where added <Link to={'/allFood'} className='text-red-500' title='Go review page'>Please add Review</Link></h1>
}
            
        </div>
    );
};

export default Myreview;