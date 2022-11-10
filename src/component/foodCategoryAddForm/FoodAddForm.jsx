import React from 'react';
import useTitle from './../../titleChangeHook/UseTitleChange';

const FoodAddForm = () => {

useTitle("Add-Item");

    const foodData =(e)=>{
        e.preventDefault();
        const target = e.target;
        const foodNamed = target.foodName.value;
        const foodPrice = target.foodPrice.value;
        const foodDescription = target.foodDescription.value;
        const foodURL = target.foodUrl.value;

        if(!(foodNamed && foodPrice && foodDescription && foodURL)){
          return alert.warning('Fill up all field');
        }

        const foodData={
            foodNamed,
            foodPrice,
            foodDescription,
            foodURL
        }

        fetch('http://localhost:5000/food',{
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(foodData),
        })
        .then(req=>req.json())
        .then(data=>{
            target.reset();
            console.log(data)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-2"><i>Add New Item</i></h1>
    </div>
    <div className="card flex-shrink-0 w-80 lg:w-96 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={foodData}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food-name</span>
          </label>
          <input type="text" placeholder="Food-Name" name='foodName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food-Price</span>
          </label>
          <input type="number" name='foodPrice' placeholder="Food-Price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food-Description</span>
          </label>
          <textarea name='foodDescription' className="textarea textarea-bordered h-24" placeholder="Food-Description" required></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food-URL</span>
          </label>
          <input name='foodUrl' type="text" placeholder="SET URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Add</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodAddForm;