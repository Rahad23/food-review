import React, { useContext, useState } from 'react';
import { ProviderContext } from './../../contextApi/ContextApi';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from './../../titleChangeHook/UseTitleChange';

const Login = () => {
  const navigate = useNavigate();
  const [loding, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { loginEmailAndPassword, signinWithPopup, userData } = useContext(ProviderContext);
  useTitle("Login");
  if (userData && userData?.email) {
    return <>
      {
        navigate('/')
      }
    </>;
  }
  const loginUser = (e) => {
    e.preventDefault();
    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;
    loginEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoading(true);
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        const email = {
          email: user.email
        };

        fetch('https://cooking-server-rahad23.vercel.app/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(email)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('key', data.token);
            // console.log(data)
          })
        target.reset();
        navigate(from, { replace: true });
        toast.success("Login success full");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  // set google signin
  const signinPopupGoogle = () => {
    signinWithPopup()
      .then((result) => {
        setLoading(true);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const email = {
          email: user.email
        };

        fetch('https://cooking-server-rahad23.vercel.app/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(email)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('key', data.token);
            // console.log(data)
          })



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
      {
        loding ? <div className='flex justify-center items-center mt-56 mb-60'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
          :
          <div className='flex hidden justify-center items-center mt-56 mb-60'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
      }

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