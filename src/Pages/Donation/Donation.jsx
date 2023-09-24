import React, { useEffect, useState } from 'react';
import Donationdatacard from './Donationdatacard';

const Donation = () => {

     const [donationdata ,setDonationdata] = useState([])

       useEffect(() => {

        const finddonation = JSON.parse(localStorage.getItem('item')) 
        setDonationdata(finddonation)
           

       },[])
    return (
        <div>
            {
                donationdata.map(data => <Donationdatacard data={data} key={data.id}></Donationdatacard> )
            }
        </div>
    );
};

export default Donation;