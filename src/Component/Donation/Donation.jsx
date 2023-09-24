import React from 'react';
import Donationcard from './Donationcard';

const Donation = ({donation}) => {
   
        
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {
                donation?.map(donation => <Donationcard donation={donation} key={donation.id}></Donationcard>)
            }
        </div>
    );
};

export default Donation;