import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { addNewUser, addToWishList,getWishList,removeFromWishList } from "../api/crud";
import { useUserContext } from "./UserContext";

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
        <div>
            {Object.values(data).map((item)=>{
                return<><h1>{item.name}</h1>
                    <button onClick={()=>removeFromWishList(item.id,user.uid)}  >X</button>
                </>
            })}
        </div>
    )
}
export default WishList