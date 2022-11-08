import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const data = useLoaderData();
    const {foodDescription,foodNamed,foodPrice,foodURL,_id}=data;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-14 container mx-auto">
            <figure><img src={foodURL} alt="Album"/></figure>
            <div className="card-body">
                <div className='indicator'>
                <span className="indicator-item badge badge-secondary text-sm font-semibold text-black">New</span> 
                 <h2 className="card-title text-red-900">{foodNamed}</h2>
                </div>
                <h2 className='text-xl font-semibold'>$<span className='text-black'>{foodPrice}</span></h2>
                <p className='w-96'>{foodDescription}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Order-Now</button>
                </div>
            </div>
</div>
        </div>
    );
};

export default FoodDetails;