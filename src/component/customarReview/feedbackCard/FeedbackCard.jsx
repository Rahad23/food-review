import React from 'react';
import './FeedbackCard.css';
import { Link } from 'react-router-dom';

const FeedbackCard = ({feedback}) => {
    const {imgUrl,message,name,productId,rating,_id} = feedback;
    const messages = message.length > 100 ? message.slice(0,100)+"..." : message;
    // console.log(feedback)
    return (
        <div>
            <div className="card w-full mb-7 bg-primary text-primary-content">
        <div className="card-body">
            <div className='grid card-grid-set'>
            <div className='text-left'>
                <img className='w-36 rounded-2xl' src={imgUrl} alt="" />
                <h2 className='mt-2 text-lg font-semibold text-slate-900'>Name: {name}</h2>
            </div>
           <div>
            <p>{messages.length >100 ?<div>{messages}<Link className='bg-green-500 p-1 cursor-pointer rounded-xl' to={`/readMore/${_id}`}>More</Link></div> : messages}</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default FeedbackCard;