import React, { useEffect, useState } from 'react';
import Card from './card/Card';

const Owner = () => {
    const [owner, setOwner] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/owner')
            .then(res => res.json())
            .then(data => setOwner(data))
    }, [])
    return (
        <div className='mt-44'>
            <h1 className='text-5xl text-[#0652DD] font-bold text-center mb-7'>Famous of Belarus</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl p-8 lg:justify-between container mx-auto">
                {
                    owner.map(data => <Card key={data?._id} data={data}></Card>)
                }

            </div>
        </div>
    );
};

export default Owner;