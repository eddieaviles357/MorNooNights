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

  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const { 
    errors, 
    setErrors,
    updateRecentlyVisited,
    topNews,
    setTopNews,
  } = useContext(UserContext);

  async function loadMoreTopNews() {
    setCurrPage(_=>currPage+1);
    fetchTopNews(true, '', currPage);
  }

  // is mounted is used for React development since it calls useEffect twice
  async function fetchTopNews(mounted = false, name = '', page = 1) {
    if(!mounted) setCurrPage(2);
    try {
      setIsLoading(true);
      const news = await MorNooNightsNewsAPI.getTopNews(name, page);
      const { data: { data } } = news;

      console.log('extracted_data_',data);
      !mounted ? 
        setTopNews( data ) :
        setTopNews( prev => [ ...prev, ...data ]);
      setIsLoading(false);
    } catch (err) {
      setErrors(Array.from(err || err.message))
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      fetchTopNews();
    } catch (err) {
      setErrors(Array.from(err || err.message))
      console.log(err);
    }
  },[])

  // if there are any errors display them to user
  if (errors) {
    console.error('API::ERROR::',errors);
    return <div className="d-flex justify-content-center ">{errors.map( (e, idx) => (<div key={idx}>Sorry an Error Ocurred</div>) )}</div>
  };

  // Loader
  // if (!topNews.length) return <div className="p-4">Loading...</div>;

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
                <></>
            )}
      {isLoading && <div className="p-4">Loading...</div>}
      {(topNews.length && !isLoading) 
        ? <button onClick={loadMoreTopNews} className="Btn-tertiary btn">More</button>
        : <></>}
    </div>
  );
};