import React from 'react';
import { Link } from 'react-router-dom';
const Donationcard = ({donation}) => {

      const{category,title,picture,category_bg,card_bg,text_button_bg,id}= donation
    return (
        <div>
            <Link to={`/donationinfo/${id}`}>
           <div className="card card-compact mb-2   shadow-lg" style={{background: `${card_bg}`}}>
  <figure><img src={picture} className='h-[250px] w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className= "card-title  text-[16px] bg-[${category_bg}]  font-medium  px-2 w-[35%] text-center border-2" style={{color: `${text_button_bg}`, background :`${category_bg}`}}>{category}</h2>
    <p className='text-[20px] font-semibold' style={{color: `${text_button_bg}`}}>{title}</p>
 
  </div>
</div>

</Link>
        </div>
    );
};

export default Donationcard;