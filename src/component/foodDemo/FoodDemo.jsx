import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './foodCard/FoodCard';

const FoodDemo = () => {
    const [foods, setFood] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/food')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <div className='grid grid-cols-3 mt-20 container mx-auto'>
            {
                foods.map(food=><FoodCard key={food?._id} food={food}></FoodCard>)
            }
           <div className='mt-3'>
              <Link to={'/allFood'} className="text-slate-900 text-lg hover:text-gray-700 font-medium">See All</Link>
           </div>
        </div>
    );
};

export default FoodDemo;