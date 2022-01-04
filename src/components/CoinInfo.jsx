import React from "react";
import './coinInfo.css'

const CoinInfo = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className=" flex-column">
              <span className="text-muted coin-data-category">Market Cap:</span>
              <span>{data.market_cap} $</span>
            </div>
            <hr />
            <div className="flex-column">
              <span className="totalSupply">
                Total Supply:
              </span>
              <span>{data.total_supply} $</span>
            </div>
          </div>

          <div className="column">
            <div className="flex-column">
              <span className="volume" >Volume(24H):</span>
              <span>{data.total_volume} $</span>
            </div>
            <hr />
            <div className="flex-column">
              <span className="high24">high 24h:</span>
              <span>{data.high_24h} $</span>
            </div>
          </div>

          <div className="column">
            <div className="flex-column">
              <span className="Circulating-supply">
                Circulating Supply:  
              </span>
              <span>{data.circulating_supply} $</span>
            </div>
            <hr />
            <div className=" flex-column">
              <span className="low24">low 24h:</span>
              <span>{data.low_24h} $</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinInfo;