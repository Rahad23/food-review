import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const FoodCard = ({foods}) => {
    const {foodDescription,foodNamed,foodPrice,foodURL,_id} = foods;

    const desription = foodDescription.slice(0,100)+"...";

    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={foodURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {foodNamed}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: ${foodPrice}</p>
                    <p>{desription}</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <div className='flex items-center'>
                          <BsArrowRightCircleFill title='Food-Details' className='mt-2 text-2xl cursor-pointer text-[#fc834b]'></BsArrowRightCircleFill>
                        </div>
                    <div>
                        <div className="badge badge-outline">{foodNamed}</div> 
                        <div className="badge badge-outline">Products</div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default FoodCard;