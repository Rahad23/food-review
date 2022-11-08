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
            <div className="card w-full mb-7 bg-primary text-primary-content">
        <div className="card-body">
            <div className='grid card-grid-set'>
            <div className='text-left'>
                <img className='w-36 rounded-2xl' src={imgUrl} alt="" />
                <h2 className='mt-2 text-lg font-semibold text-slate-900'>Name: {name}</h2>
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