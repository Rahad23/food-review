import React, { useEffect, useState } from 'react';
import Card from './card/Card';


const HowItWorks = () => {
    const [work, setWork]=useState();

    useEffect(()=>{
        fetch('http://localhost:5000/howItwork')
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])

    return (
        <div className='container mx-auto'>
            <div className='text-center mt-28 mb-10'>
            <h1 className='text-5xl font-bold mb-3 mt-7'>How It Works</h1>
            <p className='w-1/2 mx-auto text-[#787878] font-semibold'>Food names in English! When learning English there are many reasons why you might need to know the names of different foods.</p>
            </div>
           <div className='grid grid-cols-3 mt-16 mb-32'>
           {
            work?.map(wrk=><Card key={wrk?._id} data={wrk}></Card>)
           }
           </div>
        </div>
    );
};

export default HowItWorks;