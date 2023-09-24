import React, { useEffect, useState } from 'react';
import Donationcard from './Donationcard';

const Donation = ({donation}) => {
   
   const [donations , setDonation] = useState([])

      useEffect(() => {

        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonation(data))

      } ,[])
        
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 px-5 gap-5 lg:px-0'>
        
         {
            donations.map(donation => <Donationcard donation ={donation } key={donation.id}></Donationcard>)
         }
        </div>
    );
};

export default Donation;