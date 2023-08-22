import React, { useState, useEffect, useContext } from "react";
import MorNooNightsNewsAPI from "../../api/api";
import NewsCard from "./NewsCard";
import UserContext from "../auth/UserContext";

/** Show page with Top News.
 *
 * On mount, loads top news from API.
 * Re-loads filtered top news on submit from search form.
 *
 * This is routed to at /news
 *
 */

export default function TopNews() {
  // console.debug("TopNews");

  const [errors, setErrors] = useState(null);
  
  const { 
    currentUser, 
    visitedNews, 
    setVisitedNews, 
    updateRecentlyVisited,
    topNews,
    setTopNews,
    loadMoreTopNews
  } = useContext(UserContext);

  // fetch recents data from db
  useEffect(() => {
    async function recents(username) {
      try {
        const {recents} = await MorNooNightsNewsAPI.getRecents( username ) || [];
        setVisitedNews( JSON.stringify(recents) );
      } catch (err) {
        setErrors(Array.from(err || err.message))
      };
    };
    recents(currentUser.username);
  }, [currentUser.username, setVisitedNews]);

  // if there are any errors display them to user
  if (errors) {
    console.error('API::ERROR::',errors);
    return <div className="d-flex justify-content-center ">{errors.map(e => (<div>Sorry an Error Ocurred</div>) )}</div>
  };

  // Loader
  if (!topNews.length) return <div className="p-4">Loading...</div>;

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Top News</h2>
        {topNews.length
            ? (
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap my-5">
                  {topNews.map( 
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
                      published_at }, idx) => {
                        
                      const nObj = { 
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
                        published_at 
                        };
                      return (
                      <NewsCard 
                        key={`${uuid}${idx}`}
                        newsObj={nObj}
                        updateRecentlyVisited={updateRecentlyVisited} />
                        )}
                    )
                  }
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      <button onClick={loadMoreTopNews} className="Btn-tertiary btn">More</button>
    </div>
  );
};