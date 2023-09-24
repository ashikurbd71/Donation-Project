import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Header/Navber/Navber';

const Mainlayout = () => {
    return (

        <>
        <div className='lg:px-10 px-3 bg-[#FFFFFFF2]'>
        <Navber></Navber>
        </div>

           <Outlet></Outlet>

        </>
    );
};

export default Mainlayout;