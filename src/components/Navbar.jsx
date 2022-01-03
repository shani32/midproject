import React from "react";
import navbar from'../components/navbar.css'
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton";

const Navbar=()=>{
    return(
    <div className="navBarContainer">
        <div className="logo">logo</div>
        <Link to = {'/'}> <div className="homepage">Homepage</div></Link>
        <Link to = {'/news'}> <div className="wishList">News</div></Link>
       <Link to={'/login'}> <div className="loginUser">Login</div></Link>
    </div>
 
    )
} 
    export default Navbar