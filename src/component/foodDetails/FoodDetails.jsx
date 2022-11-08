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
                <span className="indicator-item badge badge-secondary text-sm font-semibold text-black">Hot</span> 
                 <h2 className="card-title text-red-900">{foodNamed}</h2>
                </div>
                <h2 className='text-xl font-semibold'>$<span className='text-black'>{foodPrice}</span></h2>
                <p className='w-96'>{foodDescription}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Order-Now</button>
                </div>
            </div>
</div>
 <div className='mt-5'>
 <div className="card w-[700px] bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
            <h1 className='text-center text-2xl font-bold border-dotted border-2 border-sky-500 rounded-lg p-4' style={{textShadow:"2px 2px 3px rgba(53, 59, 72,.5)", boxShadow:"inset 0 0 10px rgba(52, 73, 94,.8)"}}>Customer Review</h1>
            <form action="" className='mt-10'>
            <textarea className="textarea textarea-secondary textarea w-full h-28" placeholder="Type your feedback"></textarea>
                <div className='text-right mt-4'>
                  <button className="btn btn-active btn-secondary">Submit</button>
                </div>
            </form>
        </div>
        </div>
 </div>
        </div>
    );
};

export default FoodDetails;