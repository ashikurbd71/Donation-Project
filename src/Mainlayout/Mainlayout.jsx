import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (

        <>
        <div>
            hello iam fixed 
        </div>

           <Outlet></Outlet>

        </>
    );
};

export default Mainlayout;