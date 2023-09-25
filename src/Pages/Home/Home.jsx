import React, { useEffect, useState } from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import Navber from '../../Component/Header/Navber/Navber';
import Donation from '../../Component/Donation/Donation';


const Home = () => {

   
     
    return (

        <>
      
          <div className='mx-auto max-w-screen-xl px-5 lg:px-0 '>

               <Donation></Donation>

               
          </div>

        </>
    );
};

export default Home;