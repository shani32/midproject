
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Coin from './components/coin';
import Header from './components/Navbar';
import MainCoins from './pages/coinDetailsPage/MainCoins/MainCoins';
import { BrowserRouter,  Route } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import CoinDetailsPage from './pages/coinDetailsPage/coinDetails.Page';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogOutButton';
import {googleSign} from './api/auth'
import Navbar from './components/Navbar';
import { WishListContextProvider } from './components/wishListContext';
import ArticlesPage from './pages/coinDetailsPage/articles/articlesPage';
function App() {
  const [user, setUser]=React.useState('')
  console.log(user)
  // render() {
    return (
      <>
        <main>
          <WishListContextProvider>
          <BrowserRouter>
            <Navbar/>
            
            <LogoutButton />
            <div className="container">  
            
                    <Route path="/" exact component={MainCoins}/>
                    <Route path="/coins/:id" exact component={CoinDetailsPage}/>
                    <Route path="/news" exact component={ArticlesPage}/>
                    {/* <Route path="/login" exact component={LoginButton}/> */}
            

            </div>
          </BrowserRouter>  
          </WishListContextProvider>
        </main>
        </>
    )
}

  export default App