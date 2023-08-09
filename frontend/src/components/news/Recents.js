import React,{ useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import NewsCard from "./NewsCard";

function Recents() {
  console.debug("RECENT::NEWS");
  const { 
    visitedNews,
    updateRecentlyVisited
  } = useContext(UserContext);

  const [news, setNews] = useState(JSON.parse(visitedNews));

  console.log('news',news);
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Recents</h2>
        {news.length
            ? (
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap my-5">
                  {news.map( 
                    ({ 
                      uuid, 
                      title, 
                      description, 
                      keywords, 
                      snippet, 
                      url, 
                      language, 
                      locale, 
                      imageURL, 
                      source, 
                      publishedAt,
                      visitedAt }) => {
                      const nObj = { uuid, title, description, keywords, snippet, url, language, locale, image_url: imageURL, source, published_at: publishedAt, visitedAt };
                      return (
                      <NewsCard 
                        key={visitedAt}
                        newsObj={nObj}
                        updateRecentlyVisited={updateRecentlyVisited} />
                        )}
                    )
                  }
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
        )}
    </div>
  )
};

export default Recents;