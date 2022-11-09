import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReviewCard.css';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { toast } from 'react-toastify';

const ReviewCard = ({data}) => {
    console.log(data);
 const {foodName,foodPrice,foodUrl,message,rating,foodDescription,_id } =data;
 const messages = message.length > 100 ? message.slice(0,100)+"..." : message;

    const handleDelete = (_id)=>{
        const permition = window.confirm("You want to delete this feedback");
        
        if(permition){
            fetch(`http://localhost:5000/comment/${_id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                toast.success("Delete success-full");
                console.log(data)
            })
        }
    }


    return (
        <div>
            
             <div className="card w-[70%] mx-auto mb-7 bg-primary text-primary-content">
                <div className="card-body">
                    <div className='grid card-grid-sets'>
                    <div className='text-left'>
                        <img className='w-12 rounded-2xl' src={foodUrl} alt="" />
                        <h2 className='mt-2 text-lg font-semibold text-slate-900'>{foodName}</h2>
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
                    <h1 className='text-xl font-bold text-red-500 text-center'>Comment</h1>
                    <p className='text-center'>{messages?.length >100 ?<div>{messages}<Link className='bg-green-500 p-1 cursor-pointer rounded-xl' to={`/readMore/${_id}`}>More</Link></div> : messages}</p>
                    </div>
                    <div className='flex justify-end'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="p-2 font-bold text-white rounded-lg bg-lime-800 m-1 cursor-pointer">Action<IoMdArrowDropdown className='inline'></IoMdArrowDropdown></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='mb-2'><Link className='bg-lime-700 text-white' to={`/editFeedback/${_id}`}>Edit</Link></li>
                            <li><Link className='bg-red-500 text-white' onClick={()=>handleDelete(_id)}>Delete</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default ReviewCard;