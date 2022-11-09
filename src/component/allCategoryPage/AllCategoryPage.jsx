import React, { useEffect, useState } from 'react';
import FoodCard from './foodCard/FoodCard';
import useTitle from './../../titleChangeHook/UseTitleChange';

const AllCategoryPage = () => {
    useTitle("All-Category");
    const [food, setFood]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <div className='container mx-auto mt-16'>
             <div>
                <h1 className='text-5xl text-center mb-16 font-semibold'>All-Category</h1>
            </div>
            <div className='grid grid-cols-3 gap-8'>
            {
                food.map(fd=><FoodCard key={fd?._id} foods={fd}></FoodCard>)
            }
        </div>
        </div>
    );
};

export default AllCategoryPage;