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
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl mt-32 lg:mt-20 lg:mb-10 mb-20 gap-5 px-5 lg:px-0'>
            {
                donationdata?.slice(0,deletes).map(data => <Donationdatacard data={data} key={data.id}></Donationdatacard> )
            }
        </div>


          <div className={


         donationdata?.length == deletes && 'hidden' 
         

          }>
            
          {
           donationdata?.length >= 4 && <button  onClick={() => setDeltes(donationdata?.length)} className="btn btn-neutral flex justify-center mx-auto mb-10 bg-[#009444] border-none text-white " >Show All</button>
            
            }
          </div>
        </>
    );
};

export default Donation;