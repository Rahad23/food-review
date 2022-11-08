import React, { useContext } from 'react';
import { ProviderContext } from './../../contextApi/ContextApi';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();
    const {loginEmailAndPassword, signinWithPopup, userData} = useContext(ProviderContext);
    if(userData && userData?.email){
        return <>
        {
            navigate('/')
        }
        </>;
    }
    const loginUser=(e)=>{
        e.preventDefault();
        const target = e.target;

        const email = target.email.value;
        const password = target.password.value;
        loginEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            target.reset();
            navigate('/');
            toast.success("Login success full");

            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
        console.log(email, password);
    }
// set google signin
const signinPopupGoogle=()=>{
    signinWithPopup()
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate('/');
        toast.success("Login success-full");
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now</h1>
    </div>
    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={loginUser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
         <div className='flex justify-between'>
         <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className='label'>
            <Link to="/register" className='label-text-alt link link-hover text-orange-600'>Register</Link>
          </label>
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
        <h1 className='text-xl text-black text-center mt-5'>or</h1>
        <hr />
        <div className="form-control mt-6">
          <button onClick={signinPopupGoogle} className="btn bg-[#a55eea] border-none" type='submit'><BsGoogle className='text-3xl text-[#fff] mr-2'></BsGoogle> Login-with-Google</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;