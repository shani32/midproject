import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../../components/chart";
import axios from "axios";
import CoinInfo from "../../components/CoinInfo";
import Spinner from "../../components/spinner";


const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        // t: Math.floor((el[0]/ (1000 * 60 * 60)) % 24)+":",
        t: new Date(el[0]).toISOString().slice(11,16),
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        axios.get(`https://intense-mesa-62220.herokuapp.com/api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        axios.get(`https://intense-mesa-62220.herokuapp.com/api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        axios.get(`https://intense-mesa-62220.herokuapp.com/api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        axios.get("https://intense-mesa-62220.herokuapp.com/api.coingecko.com/api/v3/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      })
      setIsLoading(false)
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div><Spinner/></div>;
    }
     console.log(`coin: `,coinData)
    return (
      
      <div className="coinlist">
        <HistoryChart data={coinData} />
        <CoinInfo data={coinData.detail} />
      </div>
    );
  };
  return renderData();
};

export default CoinDetailPage;