import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Donationinfocard = ({donainfo}) => {


     const{title,picture,category_bg,card_bg,text_button_bg,id,description,price,button_bg}= donainfo

     const handleadd = () => {

          const adddonation = []

            const finddonation = JSON.parse(localStorage.getItem('item')) 

             if(!finddonation){

                 adddonation.push(donainfo)
                 localStorage.setItem('item',JSON.stringify(adddonation))
                
             } else{

                 const exits = finddonation.find(item => item.id === id)

                   if(!exits){
                    adddonation.push(...finddonation,donainfo)
                    localStorage.setItem('item',JSON.stringify(adddonation))

                    return(

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add Successfuly',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     )
                   }else{

                    return(

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Already Added',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    )
                   }

                
                  
             }

     }
       
    return (
        <div>
            <div className="card card-compact  mt-14 mx-auto lg:w-6/12 flex rounded-none justify-center h-auto max-w-screen-xl bg-base-100 shadow-xl" style={{background:`${card_bg}`}}>

    <div className='relative'>
    <figure><img src={picture} className='w-full h-[300px]' alt="Shoes" /></figure>

      <div className='absolute bottom-0 lg:bg-[#0B0B0B80] md:bg-[#0B0B0B80]  lg:w-[684px] md:w-[684px]   py-4'>
      <button onClick={handleadd} className="btn btn-neutral ml-4 border-none " style={{background: `${button_bg} `}}>Donate ${price}</button>
      </div>
    </div>


  <div className="card-body mt-2 space-y-2">
    <h2 className="card-title text-[#0B0B0B] lg:text-[40px] font-bold" >{title}</h2>
    <p className='text-[#1c1c1c] lg:text-[16px] font-medium'>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default Donationinfocard;