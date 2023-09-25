import React, { useEffect, useState } from 'react';
import Donationdatacard from './Donationdatacard';

const Donation = () => {

     const [donationdata ,setDonationdata] = useState([])

     const  [deletes , setDeltes] = useState(4)

       useEffect(() => {

        const finddonation = JSON.parse(localStorage.getItem('item')) 
        setDonationdata(finddonation)
           

       },[])
    return (

        <>
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl my-10 gap-5 px-5 lg:px-0'>
            {
                donationdata?.slice(0,deletes).map(data => <Donationdatacard data={data} key={data.id}></Donationdatacard> )
            }
        </div>
          <div className={deletes == donationdata?.length  && 'hidden'}>
          <button onClick={() => setDeltes(donationdata?.length)} className="btn btn-neutral flex justify-center mx-auto mb-10 bg-[#009444] border-none text-white " >Show All</button>
          </div>
        </>
    );
};

export default Donation;