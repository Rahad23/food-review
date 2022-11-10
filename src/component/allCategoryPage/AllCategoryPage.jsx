import React, { useEffect, useState } from 'react';
import FoodCard from './foodCard/FoodCard';
import useTitle from './../../titleChangeHook/UseTitleChange';

const AllCategoryPage = () => {
    useTitle("All-Category");
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch('https://cooking-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div className='container mx-auto mt-16'>
            <div>
                <h1 className='text-5xl text-center mb-16 font-semibold'>All-Category</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-8 flex flex-col'>
                {
                    food.map(fd => <FoodCard key={fd?._id} foods={fd}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllCategoryPage;