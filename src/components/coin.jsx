import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Coin = ({ name, image, symbol, price, volume, priceChange,id }) => {
     console.log("id", id)
    return (
       
    <Link to = {`/coins/${id}`}>
    <div className="coinContainer">
        <div className="coinRow">
            <div className="coin">
                <img src={image} alt="cryptoImage" className="cryptoImage" />
                <h1>{name}</h1>
                <p className="coinSymbol">symbol:{symbol}</p>
            </div>
            <div className="coinData">
                <p className="coinPrice">price:{price}$</p>
                <p className="coinVolume">volume:{volume.toLocaleString()}$</p>
                {priceChange < 0 ? (<p className="coinPercent red">{priceChange.toFixed(2)}%</p>) :
                    (<p className="coinPercent green">{priceChange.toFixed(2)}%</p>)}

            </div>
        </div>
    </div>
     </Link >
)
}
export default Coin