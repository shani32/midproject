// import React, { useEffect, useRef } from "react";
// import Chart from 'chart.js/auto'
// import {ChartOptions}  from "./ChartOptions";


//  const CoinsChart=()=>{
//    const chartRef= useRef()

//    useEffect(()=>{
//        if(chartRef && chartRef.current){
//            console.log('yeahhh')
//            const chartInstance= new Chart(chartRef.current, {

//             type: 'line',
//             data: {
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                 datasets: [{
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderColor: "rgba(174,305, 194, 0.4)",
//                     pointRadius:0,
//                     borderWidth: 1
//                 }]
//             },
//             options: ChartOptions,
               
                 
            
//            })
//            return () => chartInstance.destroy();

//        }
//    }, [chartRef])
//    return(
//        <div>
//            <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
//        </div>
//    )
    
// }
// export default CoinsChart
import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js/auto";
import { ChartOptions } from "../components/ChartOptions";


const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

//   const determineTimeFormat = () => {
//     switch (timeFormat) {
//       case "24h":
//         return day;
//       case "7d":
//         return week;
//       case "1y":
//         return year;
//       default:
//         return day;
//     }
//   };

  useEffect(() => {
      if (chartRef && chartRef.current && detail) {
        const yData = (Object.values(day).map(item => {
            return (item.y)
        }))
        const tData = (Object.values(day).map(item => {
            return (item.t)
        }))
        console.log(yData)
      console.log("yeah")
      console.log(data)
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
            labels : tData,
          datasets: [
            {
              label: `${detail.name} price`,
              data: yData,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...ChartOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p>${detail.current_price.toFixed(2)}</p>
          <p
            // className={
            //   detail.price_change_24h < 0
            //     // ? "text-danger my-0"
            //     // : "text-success my-0"
            // }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div>
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

      <div>
        {/* <button
          onClick={() => setTimeFormat("24h")}
         
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
         
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
         
        >
          1y
        </button> */}
      </div>
    </div>
  );
};

export default HistoryChart;