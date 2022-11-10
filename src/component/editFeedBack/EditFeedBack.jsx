import React, { useContext, useState } from 'react';
import { ProviderContext } from './../../contextApi/ContextApi';
import { AiFillStar } from 'react-icons/ai';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditFeedBack = () => {
    // user comment 
    const comment = useLoaderData();
    // console.log(comment);
    const navigate = useNavigate();
    const { message, time, email, foodDescription, foodId, foodName, foodPrice, foodUrl, name, _id, imgUrl } = comment;

    const { userData } = useContext(ProviderContext);
    // set rating hook
    const [ratings, setRating] = useState(5);

    const editData = (e) => {
        e.preventDefault();
        const target = e.target;
        const messages = target.comment.value;
        const updateData = {
            time,
            message: messages,
            rating: ratings,
            email,
            foodDescription,
            foodId,
            foodName,
            foodPrice,
            foodUrl,
            name,
            imgUrl
        }
        fetch(`http://localhost:5000/commentUpdate/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then(res => res.json())
            .then(data => {
                navigate('/myReview')
                console.log(data)
            })

    }
    return (
        <div>

            <div className="card lg:w-[700px] w-40% bg-base-100 shadow-xl mx-auto mt-20 ">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold border-dotted border-2 border-sky-500 rounded-lg p-4' style={{ textShadow: "2px 2px 3px rgba(53, 59, 72,.5)", boxShadow: "inset 0 0 10px rgba(52, 73, 94,.8)" }}>Customer Review</h1>
                    <form onSubmit={editData} className='mt-10'>

                        <textarea defaultValue={message} name='comment' className="textarea textarea-secondary textarea w-full h-28" placeholder="Type your feedback"></textarea>

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
                            <button className="btn btn-active btn-secondary disabled" type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditFeedBack;