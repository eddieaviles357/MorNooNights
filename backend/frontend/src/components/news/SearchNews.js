import React,{ useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import NewsCard from "./NewsCard";
import MorNooNightsNewsAPI from "../../api/api";
import SearchForm from "../common/SearchForm";
import Categories from "../common/Categories";

function SearchNews() {
  console.debug("SEARCH::NEWS");
  const { 
    updateRecentlyVisited
  } = useContext(UserContext);

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  async function reset() {
    setNews(() => []);
    setCurrentPage(() => 1);
    setSearchTerm(() => '');
  };

  async function search(term, page = 1) {
    try {
      setIsLoading(true);
      const {data} = await MorNooNightsNewsAPI.searchNews(term, page);
      setNews( prev => [ ...prev, ...data.data ]);
      setSearchTerm( term );
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
    setCurrentPage( currPage+1 );
  };

  async function getCategoryNews(category, page = 1, reset = false) {
    try {
      setIsLoading(true);
      const {data} = await MorNooNightsNewsAPI.getNewsByCategory(category, page);
      console.log("%cCategory", "color: yellow; font-size: 20px;", category);
      (reset) ? setNews( [...data.data] ) : setNews( prev => [ ...prev, ...data.data ]);
      setSearchTerm( category );
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  
  return (
    <div className="d-flex flex-column align-items-center">
      <Categories clickHandler={getCategoryNews} />
      <h2>Search News</h2>
      <SearchForm searchFor={search} reset={reset}/>
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
            ) : ""}
      {isLoading && <div className="p-4">Loading...</div>}
      {(news.length && !isLoading) 
        ? <button onClick={() => search(searchTerm, currPage)} className="Btn-tertiary btn">More</button>
        : <></>}
    </div>
  )
};

export default SearchNews;