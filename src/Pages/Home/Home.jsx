import React from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import Navber from '../../Component/Header/Navber/Navber';
import Donation from '../../Component/Donation/Donation';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    
     
    return (

        <>
        <div className='bg-[#FFFFFFF2] mx-auto w-full'>
          
          <Banner></Banner>

        </div>

          <div className='mx-auto max-w-screen-xl px-5 lg:px-0 '>

               <Donation></Donation>
  {/* <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
               {
                    donations.map(donation => <Donation donation={donation} key={donation.id}></Donation> )
                } 
  </div> */}
               
          </div>

        </>
    );
};

export default Home;