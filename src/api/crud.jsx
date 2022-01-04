import db from "./fireBase"
import {ref,set,get,update,remove} from 'firebase/database';
import { useUserContext } from "../components/UserContext";

export function  removeFromWishList(coinId,uid){
  remove(ref(db,uid+'/wishList/'+coinId))
}

export async function addNewUser(data){
     let res=[]
     await getData(res)
     if(!Object.keys(res[0]).includes(data.uid)){
    set(ref(db,data.uid),data);
     }

}

export function addToWishList(data, uid,prevNum){
    const updates= {};
    updates[uid+'/wishList/'+data.id]=data;
    updateWishListCounter(1,uid,prevNum)
    return update(ref(db), updates)

}
export function updateWishListCounter( num,uid,prevNum){
    const updates= {};
    updates[uid+'/counter/']=prevNum+num;
    return update(ref(db), updates)

}

 async function getData(res){
    
    await get(ref(db)).then((snapshot) => {
      if (snapshot.exists()) {
        res.push(snapshot.val())
        return 1
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

}

export async function getWishList(setWishList,uid){
    
    await get(ref(db,uid+'/wishList/')).then((snapshot) => {
      if (snapshot.exists()) {
       setWishList(snapshot.val())
        return 1
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

}

export async function getCounter(setCounter,uid){
    
    await get(ref(db,uid+'/wishList/')).then((snapshot) => {
      if (snapshot.exists()) {
       setCounter(snapshot.val())
        return 1
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

}
