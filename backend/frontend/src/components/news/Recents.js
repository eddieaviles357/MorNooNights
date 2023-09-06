import React,{ useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import NewsCard from "./NewsCard";
import MorNooNightsNewsAPI from "../../api/api";

function Recents() {
  console.debug("RECENT::NEWS");
  const { 
    currentUser,
    visitedNews,
    updateRecentlyVisited
  } = useContext(UserContext);

  // update the db with new recents from users browser.
  useEffect(() => {
    async function updateUserRecents(user) {
      const data = { recents: JSON.parse(visitedNews) };
      await MorNooNightsNewsAPI.updateRecents(user, data);
    }
    updateUserRecents(currentUser.username);
  }, []);

  const [news, setNews] = useState(JSON.parse(visitedNews));

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
                      image_url, 
                      source, 
                      published_at,
                      visited_at }, idx) => {
                      const nObj = { uuid, title, description, keywords, snippet, url, language, locale, image_url, source, published_at, visited_at };
                      return (
                      <NewsCard 
                        key={`${visited_at}${idx}`}
                        newsObj={nObj}
                        updateRecentlyVisited={updateRecentlyVisited} />
                        )}
                    )
                  }
                </div>
            ) : (
                <p className="lead">Sorry, no results were found. Try Refreshing the Page!</p>
        )}
    </div>
  )
};

export default Recents;