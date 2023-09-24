import React from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import Navber from '../../Component/Header/Navber/Navber';
import Donation from '../../Component/Donation/Donation';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

      const donation =  useLoaderData()
     
    return (

        <>
        <div className='bg-[#FFFFFFF2] mx-auto w-full'>
          
          <Banner></Banner>

        </div>

          <div className='mx-auto max-w-screen-xl px-5 lg:px-0'>

               <Donation donation={donation}></Donation>

          </div>

        </>
    );
};

export default Home;