import React from 'react';
import img1 from '../../img/curosel/c1.jpg';
import img2 from '../../img/curosel/c2.jpg';
import img3 from '../../img/curosel/c3.jpg';
import img4 from '../../img/curosel/c4.jpg';
import './Slider.css';
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='absolute flex justify-center left-5 right-5 top-[30%]'>
            <div className='text-center font-bold z-50'>
              <h1 className='text-[#ab1efd] text-6xl mb-2'>KRUTON FOOD</h1>
              <h1 className='text-[#f8f8f8] text-5xl font-semibold'>Food order wizard with online payment.</h1>
              <button className="btn btn-warning mt-5 mr-3 py-2 px-8 bg-[#fc834b] border-none rounded-2xl text-white hover:bg-[#78bf4d]">Order now</button>
              <button className="btn btn-outline border-[#78bf4d] text-white py-2 px-8 hover:bg-[#78bf4d] rounded-2xl hover:border-[#78bf4d]">food-category</button>
            </div>
          </div>
          <div className='set-overlay'>
            <img src={img1} className="w-full" alt='' />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 top-[600px]">
            <a href="#slide4" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❮</a>
            <a href="#slide2" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className='absolute flex justify-center left-5 right-5 top-[30%]'>
            <div className='text-center font-bold z-50'>
              <h1 className='text-[#ab1efd] text-6xl mb-2'>KRUTON FOOD</h1>
              <h1 className='text-[#f8f8f8] text-5xl font-semibold'>Food order wizard with online payment.</h1>
              <button className="btn btn-warning mt-5 mr-3 py-2 px-8 bg-[#fc834b] border-none rounded-2xl text-white hover:bg-[#78bf4d]">Order now</button>
              <button className="btn btn-outline border-[#78bf4d] text-white py-2 px-8 hover:bg-[#78bf4d] rounded-2xl hover:border-[#78bf4d]">food-category</button>
            </div>
          </div>
          <div className='set-overlay'>
            <img src={img2} className="w-full" alt='' />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 top-[600px]">
            <a href="#slide1" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❮</a>
            <a href="#slide3" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className='absolute flex justify-center left-5 right-5 top-[30%]'>
            <div className='text-center font-bold z-50'>
              <h1 className='text-[#ab1efd] text-6xl mb-2'>KRUTON FOOD</h1>
              <h1 className='text-[#f8f8f8] text-5xl font-semibold'>Food order wizard with online payment.</h1>
              <button className="btn btn-warning mt-5 mr-3 py-2 px-8 bg-[#fc834b] border-none rounded-2xl text-white hover:bg-[#78bf4d]">Order now</button>
              <button className="btn btn-outline border-[#78bf4d] text-white py-2 px-8 hover:bg-[#78bf4d] rounded-2xl hover:border-[#78bf4d]">food-category</button>
            </div>
          </div>
          <div className='set-overlay'>
            <img src={img3} className="w-full" alt='' />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 top-[600px]">
            <a href="#slide2" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❮</a>
            <a href="#slide4" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className='absolute flex justify-center left-5 right-5 top-[30%]'>
            <div className='text-center font-bold z-50'>
              <h1 className='text-[#ab1efd] text-6xl mb-2'>KRUTON FOOD</h1>
              <h1 className='text-[#f8f8f8] text-5xl font-semibold'>Food order wizard with online payment.</h1>
              <button className="btn btn-warning mt-5 mr-3 py-2 px-8 bg-[#fc834b] border-none rounded-2xl text-white hover:bg-[#78bf4d]">Order now</button>
              <button className="btn btn-outline border-[#78bf4d] text-white py-2 px-8 hover:bg-[#78bf4d] rounded-2xl hover:border-[#78bf4d]">food-category</button>
            </div>
          </div>
          <div className='set-overlay'>
            <img src={img4} className="w-full" alt='' />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 top-[600px]">
            <a href="#slide3" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❮</a>
            <a href="#slide1" className="btn btn-circle bg-[#78bf4d] border-none hover:bg-[#74ce3d] hover:text-slate-900 mr-3">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;