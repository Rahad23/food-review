import React, { useContext, useEffect, useState } from 'react';
import CustomerMessage from './customermessage/CustomerMessage';
import { AiFillStar } from 'react-icons/ai';
import { ProviderContext } from './../../contextApi/ContextApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CustomarReview = ({ data }) => {
    const navigate = useNavigate();
    // use context get user data
    const { userData } = useContext(ProviderContext);
    // console.log(userData);
    const [rating, setRating] = useState(5);

    const getMessgae = (e) => {
        e.preventDefault();
        const message = e.target.comment.value;
        if (!message) {
            toast.warning('Type feedback');
            return;
        }
        const feedBackData = {
            name: userData?.displayName,
            email: userData?.email,
            foodName: data?.foodNamed,
            foodDescription: data?.foodDescription,
            foodPrice: data?.foodPrice,
            foodUrl: data?.foodURL,
            foodId: data?._id,
            imgUrl: userData?.photoURL,
            message: message,
            rating: rating
        }
        // console.log(feedBackData)
        fetch(`https://cooking-server.vercel.app/comment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(feedBackData)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                if (data?.message) {
                    return navigate('/login');
                }
            })

    }
    const userLoginAlert = () => {
        toast.warning("Please login");
        return;
    }


    return (
        <div className='-z-50'>
            <div id='#review' className="card p-5 lg:p-0 lg:w-[700px] lg:mt-0 mt-11 w-[300px] bg-base-100 shadow-xl mx-auto">
                <div className="lg:card-body w-full">
                    <h1 className='text-center text-2xl font-bold border-dotted border-2 border-sky-500 rounded-lg p-4' style={{ textShadow: "2px 2px 3px rgba(53, 59, 72,.5)", boxShadow: "inset 0 0 10px rgba(52, 73, 94,.8)" }}>Customer Review</h1>
                    <form onSubmit={getMessgae} className='mt-10'>
                        {
                            userData && userData?.email ? <textarea name='comment' className="textarea textarea-secondary textarea w-full h-28" placeholder="Type your feedback"></textarea>
                                :
                                <textarea name='comment' className="textarea textarea-secondary textarea w-full h-28" placeholder="Type your feedback" disabled></textarea>
                        }

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex justify-center items-center'>
                                <AiFillStar className='text-2xl text-amber-500 font-semibold'></AiFillStar>
                                <select title='Submit Your ratings' onChange={(event) => setRating(event.target.value)} className="select select-info w-20 max-w-xs">
                                    <option selected value={5}>5</option>
                                    <option value={4.5}>4.5</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                </select>
                            </div>
                            {
                                userData && userData?.email
                                    ?
                                    <button className="btn btn-active btn-secondary disabled" type='submit' >Submit</button>
                                    :
                                    <button onClick={userLoginAlert} className="btn btn-active btn-secondary disabled" type='submit' >Submit</button>
                            }

                        </div>
                    </form>
                    <CustomerMessage id={data?._id}></CustomerMessage>
                </div>
            </div>
        </div>
    );
};

export default CustomarReview;