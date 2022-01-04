import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { addNewUser, addToWishList } from "../api/crud";
import { useUserContext } from "./UserContext";
const Coin = ({ name, image, symbol, price, volume, priceChange,id }) => {
    const {user}=useUserContext()
     console.log("id", id)
    const wishObjGentrator=()=>{
        return {name:name,image:image,price:price,priceChange:priceChange,id:id}
    }
    return (
       
   
    <div className="coinContainer">
    <Link to = {`/coins/${id}`}>
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
        </Link >
        <button onClick={()=>addToWishList(wishObjGentrator(),user.uid,0)}>Add to wishList</button>
    </div>
   
)
}
export default Coin