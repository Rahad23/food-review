import React from 'react';
import { SlLike } from 'react-icons/sl';
import { BiHappyHeartEyes } from 'react-icons/bi';


const Card = ({data}) => {
    const {details,img,like,name,ownerShip,_id}= data;
    const desription = details.slice(0,60)+"...";
    // console.log(data)
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img} alt="Shoes" className="rounded-xl w-52" />
  </figure>
 
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-slate-500'>{desription}</p>
    <div className='flex justify-between w-full items-center mt-2'>
        <span className='flex items-center cursor-pointer font-semibold'>
            <SlLike className='mr-1'></SlLike>
            <span>{like}</span>
        </span>
        <span className='flex justify-center items-center'>
            popularity ( <span className='text-xl font-bold'>7</span><BiHappyHeartEyes className='inline text-lg text-[#f368e0]'></BiHappyHeartEyes> ) country
        </span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;