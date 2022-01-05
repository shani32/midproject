
import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js/auto";
import { ChartOptions } from "../components/ChartOptions";
import './chart.css'


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
              borderColor: "white",
              borderWidth: 4,
              pointRadius: 0,
              hoverBorderWidth: 3,
              hoverBorderColor:'#fff',
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
        <div className="chartHeader">
          <p className="currentPrice">Current Price: ${detail.current_price.toFixed(0)}</p>
          <p
            // className={
            //   detail.price_change_24h < 0
            //     // ? "text-danger my-0"
            //     // : "text-success my-0"
            // }
          >
           price change percentage 24h: {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={1500} height={450}></canvas>
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
        </button> */}
        {/* <button
          onClick={() => setTimeFormat("1y")}
         
        >
          1y
        </button> */}
      </div>
    </div>
  );
};

export default HistoryChart;