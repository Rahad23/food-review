import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProviderContext } from '../../contextApi/ContextApi';
import useTitle from './../../titleChangeHook/UseTitleChange';


const Register = () => {
    const navigate = useNavigate();
    useTitle("Register");
    const {createUserEmialPassword, updateUserData, userData} = useContext(ProviderContext);
    if(userData && userData?.email){
        return navigate('/');
    }
    const registerEmailAndPassword=(e)=>{
        e.preventDefault();
        const target = e.target;
        const name = target.name.value;
        const email = target.email.value;
        const photoURL = target.photoUrl.value;
        const password = target.password.value;
        const Confirmpassword = target.confirmPassword.value;

        if(password !== Confirmpassword){
            return toast.warning("confirm password not match");
        }
        createUserEmialPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            hendleUpdateUser(name, photoURL);
            target.reset();
            navigate('/');
            toast.success("Registration success-full");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // ..
          });

        console.log(name, email, photoURL, password, Confirmpassword);
    }
    const hendleUpdateUser = (userName, PhotoURL) =>{
        const updateUser = {
         displayName: userName,
         photoURL: PhotoURL,
        }
        updateUserData(updateUser);
 }

    return (
        <div>
        <div className="hero min-h-screen mt-28">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={registerEmailAndPassword}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name='photoUrl' placeholder="url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
        </div>
        <label className='label'>
          <Link to={'/login'} className='label-text-alt link link-hover'>Login</Link>
        </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Register</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;