import React from 'react';
import { NavLink } from 'react-router-dom';
import error from '../../assets/error.jpg'
import Navber from '../Header/Navber/Navber';
const Error = () => {
    return (

        <>
         <Navber></Navber>
        <div className=' h-screen  '>   
           
             

                 <img src={error} alt="" className='lg:w-6/12 justify-between flex item-center mx-auto'/>
              
                 <h1 className='lg:text-4xl text-2xl text-center flex justify-center mb-5 items-center font-bold text-red-900'>  Not Found Any Page</h1>

              <NavLink to={'/'}><button className="btn btn-secondary flex bg-black rounded-none justify-center mx-auto border-none lg:px-10 text-white">Go Back</button></NavLink>
        </div>
        </>

    );
};

export default Error;