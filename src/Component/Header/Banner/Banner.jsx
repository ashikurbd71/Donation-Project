import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-[#FFFFFFF2] lg:h-[70vh] lg:mb-10 px-5 lg:px-0'>
                 <div className='lg:py-32 py-14'>
        
                <h1 className=' text-center  text-[#0B0B0B] text-3xl lg:text-[48px] font-bold'>I Grow By Helping People In Need</h1>
                  
                  <div className=' flex items-center justify-center mt-10'>



                 <input type="text" placeholder="Search here...." className="input rounded-none items-center input-bordered w-full max-w-xs" />

                 
                  <button className="btn btn-accent rounded-none text-[#FFF] text-[16px] font-semibold">Search</button>
                
                 </div>
                 </div>
        </div>
    );
};

export default Banner;