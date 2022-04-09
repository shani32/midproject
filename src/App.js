
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
import { UserContextProvider } from './components/UserContext';
import ArticlesPage from './pages/coinDetailsPage/articles/articlesPage';
import WishList from './components/wishList';
import Snow from './components/Snow';
import './mobile.css'

function App() {
  const [user, setUser]=React.useState('')
  console.log(user)
    return (
      <>
        <main>
          <UserContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Snow/>
            <div className="container">  
            
                    <Route path="/" exact component={MainCoins}/>
                    <Route path="/coins/:id" exact component={CoinDetailsPage}/>
                    <Route path="/news" exact component={ArticlesPage}/>
                    <Route path="/wishList" exact component={WishList}/>
            

            </div>
          </BrowserRouter>  
          </UserContextProvider>
        </main>
      </>
    )
}

  export default App