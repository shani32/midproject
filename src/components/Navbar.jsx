import React,{useEffect, useState} from "react";
import navbar from'../components/navbar.css'
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton";
import { googleSign, googleOut } from '../api/auth';
import { useUserContext } from "./UserContext";
import { getCounter } from "../api/crud";

const Navbar=()=>{
    const {user, setUser}=useUserContext();
    

    return(
    <div className="navBarContainer">
        <div className="logo">{user.displayName? user.displayName: "hello"}</div>
        <Link to = {'/'}> <div className="homepage">Homepage</div></Link>
        <Link to = {'/news'}> <div className="wishList">News</div></Link>
       {!user.displayName?<Link to={'/'}> <div onClick={()=>googleSign(setUser)} className="loginUser">Login</div></Link>:<>
        <Link to={'/wishList'}> <div onClick={()=>console.log('ds')} className="loginUser">WishLISt</div></Link>
       <Link to={'/'}> <div onClick={()=>googleOut(setUser)} className="loginUser">LogOut</div></Link></>}
    </div>
 
    )
} 
    export default Navbar