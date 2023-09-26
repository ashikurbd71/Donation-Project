import React from 'react';

const Banner = ({searchinput,serachvalue }) => {

     
    return (
        <div className='  bg-slate-300 h-auto lg:w-auto  lg:mb- mb-20 px-5 lg:px-0 bg-opacity-90 bg-v bg-blend-overlay' style={{backgroundImage: 'url("/cover1.jpg") '  }}>



            
                 <div className='lg:py-32 py-14  '>
               
                <h1 className=' text-center  text-[#0B0B0B] text-3xl lg:text-[48px] font-bold'>I Grow By Helping People In Need</h1>
                  
                  <div className=' flex items-center justify-center mt-10'>



                 <input onChange={(e) => searchinput(e.target.value)} type="text" placeholder="Search here...." className="input  rounded-none items-center input-bordered w-full max-w-xs" />


                 
                  <button onClick={serachvalue} className="btn btn-accent rounded-none text-[#FFF] text-[16px] font-semibold bg-[#FF444A] border-none">Search</button>
                
                 </div>
                 </div>
        </div>
    );
};

export default Banner;