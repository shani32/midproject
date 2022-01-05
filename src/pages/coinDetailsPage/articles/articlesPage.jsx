import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../../components/UserContext";
import './articles.css'

function ArticlesPage() {
  const imageUrl='https://img.etimg.com/thumb/msid-87012632,width-210,imgsize-271482,,resizemode-4,quality-100/top-cryptocurrency-prices-today-polkadot-bitcoin-ethereum-zoom-up-to-18.jpg'
  const [articles, setArticles] = useState([]);
  const axios = require("axios").default;
  const url = "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=12"
  useEffect(() => {
    const article = async () => {
      const { data } = await axios.get(url, {
        method: 'GET',
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': 'c2645dee11msh540a182d7a25f3fp17bf4ajsnf846fad0eb13'
        }
      });
      console.log(data);
      setArticles(data?.value);
    }
    article();
  }, [])


if (articles.length <= 0) {
  return <h1>loading</h1>
}
  const ShowArticle = () => {
    // articles.map((news, index) => {console.log(index,news.image.thumbnail?1:0)})
    return articles.map((news, index) => (
      <div className="cardContainer" key={index}>
      <div className="ui card" >
        <div className="image">
          <img className="bigImage" style={{ maxWidth: "300px", maxHeight: '300px' }} src={news.image?news.image.thumbnail.contentUrl:imageUrl} alt="icon" />
        </div>
        <div className="content">
          <a className="header"></a>
          <div className="meta">
            <span className="date">
              {new Date(news.datePublished).toDateString()}
            </span>
          </div>
          <div className="description">
            {news.description}
          </div>
        </div>
        <div className="extra content">
          <a href={news.url} target="_blank">
            <img className="icon" style={{ maxWidth: "20px" }} src={news.provider[0].image?news.provider[0].image.thumbnail.contentUrl:'Please Enter TO article'}  />
          </a>
          {news.provider[0].name}
        </div>
      </div>
      </div>
    ));
  }

  return (<>
  {ShowArticle() }
  </>
  )
}
export default ArticlesPage