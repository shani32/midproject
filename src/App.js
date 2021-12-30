
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Coin from './components/coin';
import Header from './components/Header';
import MainCoins from './pages/coinDetailsPage/MainCoins/MainCoins';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ReactDOM  from 'react-dom';



function App() {
  // render() {
    return (
        <main>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainCoins />}/>
                    
                </Routes>
            </div>
        </main>
    )

}
const root = document.querySelector("#root")
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, 
root)

  export default App