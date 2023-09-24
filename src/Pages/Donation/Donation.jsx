import React, { useEffect, useState } from 'react';
import Donationdatacard from './Donationdatacard';

const Donation = () => {

     const [donationdata ,setDonationdata] = useState([])

       useEffect(() => {

        const finddonation = JSON.parse(localStorage.getItem('item')) 
        setDonationdata(finddonation)
           

       },[])
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl my-10 gap-5 px-5 lg:px-0'>
            {
                donationdata.map(data => <Donationdatacard data={data} key={data.id}></Donationdatacard> )
            }
        </div>
    );
};

export default Donation;