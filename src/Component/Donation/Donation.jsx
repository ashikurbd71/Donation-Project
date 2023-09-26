import React, { useEffect, useState } from 'react';
import Donationcard from './Donationcard';
import Banner from '../Header/Banner/Banner';

const Donation = ({donation}) => {
   
   const [donations , setDonation] = useState([])
   const [showItem,setShowitem] =  useState([])

      useEffect(() => {

        fetch('/donation.json')
        .then(res => res.json())
        .then(data =>{
         setDonation(data)
         setShowitem(data)
        })

      } ,[])

      

  

      const [inputvalue , setInputvlue] =  useState('')

      const serachinput = inputtext => {

           setInputvlue(inputtext)
      }

   

      const serachvalue = () => {

        const search = donations?.filter(data => data.category.toLowerCase() == inputvalue.toLowerCase())
         setShowitem(search)

       
      }

     
        
    return (

      <>
   <div className='bg-[#FFFFFFF2]  w-full'>
   <Banner searchinput = {serachinput} serachvalue = {serachvalue}></Banner>
   </div>
   

        <div className='grid lg:grid-cols-4 mb-10 grid-cols-1 md:grid-cols-2 px-5 gap-5 lg:px-0'>
        
         {
            showItem?.map(donation => <Donationcard donation ={donation} key={donation?.id}></Donationcard>)
         }
        </div>

        </>
    );
};

export default Donation;