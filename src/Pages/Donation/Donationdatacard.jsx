import React from 'react';

const Donationdatacard = ({data}) => {
     console.log(data)

     const{category,title,picture,category_bg,card_bg,text_button_bg,id,price,button_bg}= data
    return (
        <div className=''>
             <div>
       
           <div className="card card-compact     shadow-lg" style={{background: `${card_bg}`}}>
            <div className='flex '>

          
     <div>
     <figure><img src={picture} className='h-[250px] w-[300px] ' alt="Shoes" /></figure>
     </div>

      <div>

      <div className="card-body space-y-2">
    <h2 className= "card-title  text-[16px] bg-[${category_bg}]  font-medium  px-2 w-[60%] text-center border-2" style={{color: `${text_button_bg}`, background :`${category_bg}`}}>{category}</h2>
    <p className='text-[22px] font-semibold'>{title}</p>
    <p className='text-[20px] font-semibold' style={{color: `${text_button_bg}`}}>${price}</p>

    <button  className="btn btn-neutral  border-none text-white " style={{background: `${button_bg} `}}>View Details</button>
    
      </div>
     
    
      </div>
  </div>

</div>


        </div>
        
        </div>
    );
};

export default Donationdatacard;