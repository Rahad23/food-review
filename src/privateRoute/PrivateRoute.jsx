import React, { useContext } from 'react';
import { ProviderContext } from './../contextApi/ContextApi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {userData, loader} = useContext(ProviderContext);
    if(loader){
        return <div className='flex justify-center items-center mt-56 mb-60'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
    }
    if(userData && userData?.email){
        return children;
    }
    return  <Navigate to={'/login'} state={{from:location}} replace></Navigate>
  
};

export default PrivateRoute;