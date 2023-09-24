
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';

  const router = createBrowserRouter([

   {
     path:"/", 
     element:  <Mainlayout></Mainlayout>,

      children:[

        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('donation.json'),
        },
        {
            path: "/donation",
            element:<Donation></Donation>
        },
        {
            path: "/statistic",
            element:<Statistics></Statistics>
        }
      ]
   }


  ])

export default router;