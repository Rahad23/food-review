import React, { useState } from 'react';
import CustomerMessage from './customermessage/CustomerMessage';
import { AiFillStar } from 'react-icons/ai';
const CustomarReview = () => {
    const [rating, setRating]= useState(5);

    const getMessgae=(e)=>{
        e.preventDefault();
        const message = e.target.comment.value;
        const feedBackData={
            message: message,
            rating: rating
        }
        console.log(feedBackData)
        fetch('http://localhost:5000/comment',{
            method:"POST",
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(feedBackData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    
    return (
        <div>
            <div className="card w-[700px] bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
            <h1 className='text-center text-2xl font-bold border-dotted border-2 border-sky-500 rounded-lg p-4' style={{textShadow:"2px 2px 3px rgba(53, 59, 72,.5)", boxShadow:"inset 0 0 10px rgba(52, 73, 94,.8)"}}>Customer Review</h1>
            <form onSubmit={getMessgae} className='mt-10'>
            <textarea name='comment' className="textarea textarea-secondary textarea w-full h-28" placeholder="Type your feedback"></textarea>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex justify-center items-center'>
                    <AiFillStar className='text-2xl text-amber-500 font-semibold'></AiFillStar>
                <select title='Submit Your ratings' onChange={(event)=>setRating(event.target.value)} className="select select-info w-20 max-w-xs">
                <option selected value={5}>5</option>
                <option value={4.5}>4.5</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                    </select>
                    </div>
                <button className="btn btn-active btn-secondary" type='submit'>Submit</button>
                </div>
            </form>
            <CustomerMessage></CustomerMessage>
        </div>
        </div>
        </div>
    );
};

export default CustomarReview;