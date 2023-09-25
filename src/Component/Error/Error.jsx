import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h- h-screen  my-44'>   
           
               <h1 className='lg:text-4xl text-3xl text-center flex justify-center items-center font-bold text-red-900'> 404 Not Found</h1>

              <button></button>

              <NavLink to={'/'}><button className="btn btn-secondary flex justify-center mx-auto">Go Back</button></NavLink>
        </div>
    );
};

export default Error;