import React, { useEffect, useState } from "react";
import ListNews from "../ListNews";

function Main() {
  const [news, setNews] = useState([]);

  const getNewsApi = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-09-21&sortBy=publishedAt&apiKey=68825892e0354082b6776c34857a459c"
    )
      .then((resp) => resp.json())
      .then((resp) => setNews(resp.articles));
  };
  useEffect(() => {
    getNewsApi();
  }, []);

  console.log(news)
  return <div>
    <ListNews news={news} />
  </div>;
}

export default Main;
