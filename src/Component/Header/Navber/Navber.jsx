import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineViewList} from 'react-icons/hi';
import Home from './../../../Pages/Home/Home';
import logo from '../../../assets/Logo.png'
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <NavLink to={'/'}><img src={logo}  alt="" className='w-36'/></NavLink>
  </div>
  <div className="flex-none">
    <ul className="  menu-horizontal px-1 lg:block ">
        
      
   <div className='flex'>
      <li className='text-[18px] font-bold mr-8 hidden lg:block'>
        
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
  }
>
  Home
</NavLink>

</li>

<li  className='text-[18px] font-bold mr-8 hidden lg:block'>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
  }
>
  Donation
</NavLink>
</li>    

<li  className='text-[18px] font-bold  hidden lg:block'>
<NavLink
  to="/statistic"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
  }
>
Statistic
</NavLink>
        
</li>
</div>
      <li>
        <details className='lg:hidden menu ' >
          <summary>
          <HiOutlineViewList className='text-3xl lg:hidden'></HiOutlineViewList>
          </summary>
          <ul className="p-2 mx-3 bg-base-100 lg:hidden">
          <li className='text-[18px] font-bold mr-8 '>
        
        <NavLink
    to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
    }
  >
    Home
  </NavLink>
  
  </li>
  
  <li  className='text-[18px] font-bold mr-8 '>
  <NavLink
    to="/donation"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
    }
  >
    Donation
  </NavLink>
  </li>    
  
  <li  className='text-[18px] font-bold lg:ml-8 '>
  <NavLink
    to="/statistic"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : " "
    }
  >
  Statistic
  </NavLink>
          
  </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navber;