import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../../components/wishListContext";
import './articles.css'

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const axios = require("axios").default;
  const url = "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=8"
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


  // articles.map((news)=> {
  //   return
  //   <>
  //   <div className="image">
  //     <img src={news.image.thumbnail.contentUrl} />
  //   </div>
  //   <div className="content">
  //     <a className="header"></a>
  //     <div className="meta">
  //       <span className="date"></span>
  //     </div>
  //     <div className="description">
  //     </div>
  //   </div>
  //   <div className="extra content">
  //     <a>
  //       <i className="user icon"></i>
  //     </a>
  //   </div>
  //   </>

  const ShowArticle = () => {
    return articles.map((news, index) => (
      <div className="cardContainer">
      <div className="ui card" key={index}>
        <div className="image">
          <img src={news.image.thumbnail.contentUrl} alt="icon" />
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
            {/* <img style={{ maxWidth: "20px" }} src={news.provider[0].image.thumbnail.contentUrl}  /> */}
          </a>
          {news.provider[0].name}
        </div>
      </div>
      </div>
    ));
  }

  return (
    <ShowArticle />
  )
}
export default ArticlesPage