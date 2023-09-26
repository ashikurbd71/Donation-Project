import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Donationinfocard from './Donationinfocard';

const Donationinfo = () => {

     const [donainfo,setDonainfo] = useState({})

     const {id }= useParams()

       const donationinfo = useLoaderData()

 
   

     useEffect(() => {

          const donainfos = donationinfo?.find( info => info.id == id)
         setDonainfo(donainfos)
     },[id,donationinfo])
   
       
    return (
        <div>
           
           <div className='px-10 lg:px-0'>
           <Donationinfocard donainfo ={donainfo} ></Donationinfocard>
           </div>
         
        </div>
    );
};

export default Donationinfo;