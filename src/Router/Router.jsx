
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Donationinfo from '../Component/Donation/Donationinfo';

  const router = createBrowserRouter([

   {
     path:"/", 
     element:  <Mainlayout></Mainlayout>,

      children:[

        {
            path: "/",
            element:<Home></Home>,
       
           
        },
        {
            path: "/donation",
            element:<Donation></Donation>
        },
        {
            path: "/statistic",
            element:<Statistics></Statistics>
        },

        {
            path: "/donationinfo/:id",
            element:<Donationinfo></Donationinfo>,
            loader: () => fetch('donation.json')
        },

        
      ]
   }


  ])

export default router;