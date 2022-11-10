import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './foodCard/FoodCard';

const FoodDemo = () => {
    const [foods, setFood] = useState([]);
    useEffect(() => {
        fetch('https://cooking-server-rahad23.vercel.app/food')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div className='lg:grid lg:grid-cols-3 mt-20 flex flex-col container mx-auto'>
            {
                foods.map(food => <FoodCard key={food?._id} food={food}></FoodCard>)
            }
            <div className='mt-3 flex justify-center items-center w-[300%]'>
                <Link to={'/allFood'} className="text-slate-900 text-2xl hover:text-gray-700 font-bold">See All</Link>
            </div>
        </div>
    );
};

export default FoodDemo;