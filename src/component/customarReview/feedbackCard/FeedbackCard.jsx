import React from 'react';
import './FeedbackCard.css';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const FeedbackCard = ({feedback}) => {
    const {imgUrl,message,name,productId,rating,_id} = feedback;
console.log(rating);
    const messages = message.length > 100 ? message.slice(0,100)+"..." : message;
    // console.log(feedback)
    return (
        <div>
            <div className="card mb-7 bg-primary lg:p-0 p-5 text-primary-content">
        <div className="card-body">
            <div className='lg:grid card-grid-set flex justify-between'>
            <div className='text-left'>
                <img className='w-12 rounded-2xl' src={imgUrl} alt="" />
                <h2 className='lg:block hidden mt-2 lg:text-lg text-sm font-semibold text-slate-900'>Name: {name}</h2>
                <h2 className='lg:hidden block mt-2 lg:text-lg text-sm font-semibold text-slate-900'>{name}</h2>
                {
                   parseFloat(rating) ===5 && <h2 className='flex items-center'>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                    </h2>
                } 
                {
                    parseFloat(rating)===4.5 && <h2 className='flex items-center'>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <BsStarHalf className='text-amber-500 text-lg'></BsStarHalf>
                    </h2>
                }
                {
                    parseFloat(rating)===3 && <h2 className='flex items-center'>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                    </h2>
                }
                {
                     parseFloat(rating)===2 && <h2 className='flex items-center'>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                        <AiFillStar className='text-amber-500 text-lg'></AiFillStar>
                    </h2>
                }
                
            </div>
           <div className='mt-0 lg:mt-8'>
            <h1 className='text-red-600 text-center lg:block hidden mb-1 font-medium lg:font-semibold'>{name} Comment</h1>
            <h1 className='text-red-600 text-center lg:hidden block mb-1 font-normal lg:font-semibold'>Comment</h1>
            <p className='text-center text-black lg:text-lg text-sm font-normal lg:font-semibold'>{messages.length >100 ?<div>{messages}<Link className='bg-green-500 p-1 cursor-pointer rounded-xl' to={`/readMore/${_id}`}>More</Link></div> : messages}</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default FeedbackCard;