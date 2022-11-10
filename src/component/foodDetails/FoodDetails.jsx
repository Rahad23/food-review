import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomarReview from '../customarReview/CustomarReview';

const FoodDetails = () => {
    const data = useLoaderData();
    const {foodDescription,foodNamed,foodPrice,foodURL,_id}=data;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-14 container mx-auto">
            <figure><img className='w-64 lg:w-full rounded-lg' src={foodURL} alt="Album"/></figure>
            <div className="card-body lg:mt-0 mt-6">
                <div className='indicator'>
                <span className="indicator-item badge badge-secondary text-sm font-semibold text-black">Hot</span> 
                 <h2 className="card-title text-red-900">{foodNamed}</h2>
                </div>
                <h2 className='text-xl font-semibold'>$<span className='text-black'>{foodPrice}</span></h2>
                <p className='lg:w-96 w-none'>{foodDescription}</p>
                <div className="card-actions justify-end">
                    <a for="#review">
                <button className="btn btn-primary">Review</button>
                    </a>
                </div>
            </div>
</div>
{/* customar review section */}
        <div className='mt-5'>
            <CustomarReview data={data}></CustomarReview>
        </div>
        </div>
    );
};

export default FoodDetails;