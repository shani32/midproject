import React from "react";

const CoinInfo = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className=" flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="flex-column">
              <span>
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="column">
            <div className="flex-column">
              <span >Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="flex-column">
              <span>high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="column">
            <div className="flex-column">
              <span>
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className=" flex-column">
              <span>low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinInfo;