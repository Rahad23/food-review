import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import { ProviderContext } from './../../../contextApi/ContextApi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {logout, userData} = useContext(ProviderContext);
  // console.log(userData);
  // const {displayName, email,emailVerified,uid, photoURL} = userData;
  
  const userLogout=()=>{
    logout()
    .then(() => {})
    .catch((error) => {}
    );
  }
  return (
    <div>
      <div className="" style={{ backgroundColor: "rgba(25, 42, 86,1.0)" }}>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center relative"
            >
              <img className='w-24' src={logo} alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide absolute ml-[80px] mt-[28px] text-4xl text-gray-100 uppercase flex">
                Kruton <span className='tex-4xl text-[#fc834b]'>.</span>
              </span>
            </a>
          
              <ul className="flex items-center hidden space-x-8 lg:flex">
              {
            userData?.email ?  <li>
            <Link
              to="/myReview"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
              My reviews
            </Link>
          </li>
          :
          ""
            }
             {
               userData?.email ?
<li>
                
                <Link
                  to="/foodAdd"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Add service
                </Link>
              </li>
              :
              ""
             }

<li>
                
                <Link
                  to="/service"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Services
                </Link>
              </li>
              
              <li>
                <Link
                  to="/blog"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </Link>
              </li>
            </ul>

            
            <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
                 {
                  userData && userData?.email 
                  ? 
                  <div className='flex justify-center items-center'>
                      <img className='w-14 rounded-full mr-2' src={userData?.photoURL ? userData?.photoURL : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt="" />
                      <h1 className='text-white'>{userData?.displayName ? userData?.displayName : "Not-Found"}</h1>
                  </div>
                  :
                  ""
                 }
              </li>
              {
                userData && userData?.email 
                ?
                <li>
                <Link
                  onClick={userLogout}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#fc834b] hover:bg-[#db5a1e] focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                 Logout
                </Link>
              </li>
              :
              <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#fc834b] hover:bg-[#db5a1e] focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
               Login
              </Link>
            </li>
              }
              
            </ul>
            <div className="lg:hidden z-50">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 border rounded shadow-sm" style={{ backgroundColor: "rgba(25, 42, 86,1.0)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center relative"
                        >
                          <img className='w-24' src={logo} alt="" />
                          <span className="ml-2 text-xl font-bold tracking-wide absolute ml-[80px] mt-[28px] text-4xl text-gray-100 uppercase flex">
                            Kruton <span className='tex-4xl text-[#fc834b]'>.</span>
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                      {
            userData?.email ?  <li>
                <Link
                  to="/myReview"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  My reviews
                </Link>
          </li>
          :
          ""
            }
                       {
               userData?.email ?
<li>
                
                <Link
                  to="/foodAdd"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Add service
                </Link>
              </li>
              :
              ""
             }

                        <li>
                        <Link
                          to="/service"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Services
                        </Link>
                        </li>
                        <li>
                        <li>
                          <Link
                            to="/blog"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                            Blog
                          </Link>
                        </li>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-[#fc834b] hover:bg-[#db5a1e]"
                          >
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;