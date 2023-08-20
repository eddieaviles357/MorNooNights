import React,{ useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import NewsCard from "./NewsCard";
import MorNooNightsNewsAPI from "../../api/api";
import SearchForm from "../common/SearchForm";

function SearchNews() {
  console.debug("SEARCH::NEWS");
  const { 
    updateRecentlyVisited
  } = useContext(UserContext);

  const [searchedNews, setSearchNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  async function reset() {
    setSearchNews(() => []);
    setCurrentPage(() => 1);
    setSearchTerm(() => '');
  };

  async function search(term, page = 1) {
    try {
      setIsLoading(true);
      const {data} = await MorNooNightsNewsAPI.searchNews(term, page);
      console.log("%cSEARCHED::DATA", "color: blue;font-size: 18px;", data)
      setSearchNews( prev => [ ...prev, ...data.data ]);
      setSearchTerm( term );
      setIsLoading(false);
      console.log("%cFRONTEND::SEARCHED::NEWS", "color: green;", searchedNews);
    } catch (err) {
      alert(err);
    };
    setCurrentPage( currPage+1 );
  };
  console.log("PAGE::SEARCH::", currPage)
    
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Search News</h2>
      <SearchForm searchFor={search} reset={reset}/>
      {searchedNews.length
            ? (
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap my-5">
                  {searchedNews.map( 
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
      {(searchedNews.length && !isLoading) 
        ? <button onClick={() => search(searchTerm, currPage)} className="Btn-tertiary btn">More</button>
        : <></>}
    </div>
  )
};

export default SearchNews;