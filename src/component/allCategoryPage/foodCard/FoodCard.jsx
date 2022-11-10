import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const FoodCard = ({foods, setLoding}) => {
    const {foodDescription,foodNamed,foodPrice,foodURL,_id} = foods;

    const desription = foodDescription.slice(0,100)+"...";

    return (
        <div>
             <div className="card mx-auto w-80 lg:w-96 bg-base-100 shadow-xl">
             <PhotoProvider>
                    <PhotoView key={_id} src={foodURL}>
                      <figure><img src={foodURL} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                    {foodNamed}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: ${foodPrice}</p>
                    <p>{desription}</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <div className='flex items-center'>
                            <Link to={`/foodDetails/${_id}`}>
                              <BsArrowRightCircleFill title='Food-Details' className='mt-2 text-2xl cursor-pointer text-[#fc834b]'></BsArrowRightCircleFill>
                            </Link>
                        </div>
                    <div>
                        <div className="badge badge-outline">{foodNamed}</div> 
                        <div className="badge badge-outline">Products</div>
                    </div>
                    </div>
                </div>
        </div>
        {
            setLoding(false)
        }
        </div>
    );
};

export default FoodCard;