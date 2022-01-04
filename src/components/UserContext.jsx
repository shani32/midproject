import React, {createContext, useState, useContext} from "react";

export const UserContext= createContext();
export function useUserContext(){
    return useContext(UserContext)
        
    
}
export const UserContextProvider=props=>{
    // const [wishList, setWishList]= useState(['bitcoin', 'ethereum', 'bnb'])
    const [user, setUser]= useState('hello user')
    const [counter, setCounter]= useState(0)
    

    return(
        <UserContext.Provider value={{user, setUser,counter,setCounter}}>
            {props.children}
        </UserContext.Provider>
    )
}
