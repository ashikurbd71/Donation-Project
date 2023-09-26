
import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";


   
const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {

   const [chartdata , setChartdata] = useState([])

     useEffect(() => {

      const finddonation = JSON.parse(localStorage.getItem('item')) 
         setChartdata(finddonation?.length)
     } , [])
    

  const data = [

    { name: "Group A", value: 12 },
    { name: "Group B", value: chartdata  },
    
  ];


  return (

    <>
     <div className="w-ful h-screen  flex justify-center items-center">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    

    </div>

<div className="lg:flex md:flex  mx-24  justify-center mb-20">
<div className="flex items-center gap-1">
      <h1 className="text-xl font-semibold">Your Donation : </h1>
      <div className="w-14 h-2 bg-red-500">
          </div>
      </div>
        <div className="flex items-center gap-1">
      <h1 className="text-xl font-semibold">Total Donation : </h1>

          <div className="w-14 h-2 bg-green-500">
          </div>
          </div>
    </div>

    </>
  );
}
