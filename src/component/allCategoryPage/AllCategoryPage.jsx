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
    const [loding, setLoding] = useState(true);
    return (
        <div className='container mx-auto mt-16'>
            <div>
                <h1 className='text-5xl text-center mb-16 font-semibold'>All-Category</h1>
                 {/* set spenar */}
            <div>
                {
                    loding ? <div className='flex justify-center items-center mt-56 mb-60'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
                    :
                    <div className='flex hidden justify-center items-center mt-56 mb-60'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
                }
            
            </div>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-8 flex flex-col'>
                {
                    food.map(fd => <FoodCard key={fd?._id} setLoding = {setLoding} foods={fd}></FoodCard>)
                }
            </div>
            
        </div>
    );
};

export default AllCategoryPage;