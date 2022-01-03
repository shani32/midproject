import React, {createContext, useState} from "react";

export const WishListContext= createContext();

export const WishListContextProvider=props=>{
    const [wishList, setWishList]= useState(['bitcoin', 'ethereum', 'bnb'])

    return(
        <WishListContext.Provider value={{wishList}}>
            {props.children}
        </WishListContext.Provider>
    )
}
