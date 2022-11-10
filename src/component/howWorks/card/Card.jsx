import React from 'react';

const Card = ({data}) => {
    const{details, img, number, title, _id}=data;
    // console.log(data)
    return (
        <div>
            <div className="card mb-8 mx-auto card-compact w-72 lg:w-96 bg-base-100">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold"><span className='text-4xl text-slate-400 font-bold'>{number}</span>{title}</h2>
                <p className='text-center text-[#787878] text-lg font-semibold'>{details}</p>
            </div>
</div>
        </div>
    );
};

export default Card;