
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Coin from './components/coin';
import Header from './components/Header';
import MainCoins from './pages/coinDetailsPage/MainCoins/MainCoins';
import { BrowserRouter,  Route } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import CoinDetailsPage from './pages/coinDetailsPage/coinDetails.Page';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogOutButton';
import {googleSign} from './api/auth'
function App() {
  const [user, setUser]=React.useState('')
  console.log(user)
  // render() {
    return (
      <>
        <main>
          <BrowserRouter>
            <Header/>
            <LoginButton />
            <LogoutButton />
            <div className="container">  
            
                    <Route path="/" exact component={MainCoins}/>
                    <Route path="/coins/:id" exact component={CoinDetailsPage}/>
            

            </div>
          </BrowserRouter>  
        </main>
        </>
    )
}

  export default App