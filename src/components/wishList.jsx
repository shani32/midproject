import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { addNewUser, addToWishList,getWishList,removeFromWishList } from "../api/crud";
import { useUserContext } from "./UserContext";
import './wishList.css'

const WishList =()=>{
    const {user}=useUserContext()
    const [data,setData]=useState(null)

    useEffect(()=>{
      async function getData(){

          await getWishList(setData,user.uid);

      }
      getData();
      
     },[data])

    console.log(data);
if(!data)return <>Loading ..... </>
    return(
        <div className="wishListContainer">
            {Object.values(data).map((item)=>{
                return<>
              
                <div className="coinWishList">
                {/* <div className="nameWishList">name: {item.name}</div>
                <div className="priceWishList">price: {item.price}$</div>
                
                <div>price change:{item.priceChange}</div> */}
                {/* <img className="imageWishList" src={item.image} alt="coinWishList" /> */}
                <div class="ui card">
                    <a class="image" href="#">
                        <img src={item.image}/></a>
                    <div class="content">
                        <a class="header" href="#">name: {item.name} <br /> price: {item.price}$</a>
                        <div class="meta">
                            <a>price change:{item.priceChange}%</a>
                        </div>
                    </div>
                </div>
                    <button className="deleteButton" onClick={()=>removeFromWishList(item.id,user.uid)}  >X</button>
                </div>
                
                </>
            })}
        </div>
    )
}
export default WishList