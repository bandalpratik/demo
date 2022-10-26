import React from "react";
import './ListNews.css'

function ListNews({ news }) {
  return (
    <div className="news-card">
      {news.map((nw) => {
        let image = <img src={nw.urlToImage} alt="No photo" />;
        return image;
      })}
    </div>
  );
}

export default ListNews;
