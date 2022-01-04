import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import '../../../components/style.css';
import Coin from '../../../components/coin';
// import {WishListContext} from '../../../components/wishListContext'


function MainCoins() {
  const [coins, setCoins]=useState([])
  const [inputSearch, setInputSearch]=useState('')
  const [isLoading, setIsLoading]=useState(false)
  // const {wishList}= useContext(WishListContext)
  // console.log(wishList)
  
  useEffect(()=>{
    const getData = async () => {
      setIsLoading(true)
      const res = await axios
        .get("https://intense-mesa-62220.herokuapp.com/api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false")
      setCoins(res.data)
      setIsLoading(false)
    }
       getData()
      },[])

      const handlingChange=e=>{
        setInputSearch(e.target.value)
      }

      const filterOfCoins=coins.filter(coin=>{
       return coin.name.toLowerCase().includes(inputSearch.toLowerCase())

      })

      const showData=()=>{
        return filterOfCoins.map(coin=>{
          return(
            <div className='mainPageContainer'>
              <div className='background'></div>
            <div className='coin'>
            <Coin key={coin.id} 
            id={coin.id}
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            />
            </div>
            </div>
          )
        })

      } 
  return (
    <div className="coinApp">
      < div className='coin-search'>
        <h1 className='coin-text'>
        Crypto Search 
        </h1>
        <form>
          <input type="text" className="coinInput"  onChange={ handlingChange}/> 
        </form>
      </div>
      <div>
        {isLoading? <div className='coinsData'>please wait</div>: showData()}
   </div>
    </div>
  );
}

export default MainCoins;
