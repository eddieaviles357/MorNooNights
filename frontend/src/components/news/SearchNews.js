import React,{ useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import NewsCard from "./NewsCard";
import MorNooNightsNewsAPI from "../../api/api";
import SearchForm from "../common/SearchForm";

function SearchNews() {
  console.debug("SEARCH::NEWS");
  const { 
    currentUser,
    updateRecentlyVisited
  } = useContext(UserContext);

  const [searchedNews, setSearchNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function search(term) {
    const {data} = await MorNooNightsNewsAPI.searchNews(term);
    console.log("%cSEARCHED::DATA", "color: blue;font-size: 18px;", data)
    setSearchNews( prev => [ ...prev, ...data.data ]);
    console.log("%cFRONTEND::SEARCHED::NEWS", "color: green;", searchedNews);
  }

  async function loadMoreNews() {

  }

  useEffect(() => {
    // search();
    console.log("USE_EFFECT_SEARCH")
  },[searchedNews]);

    // Loader
  // if (!searchedNews.length) return <div className="p-4">Loading...</div>;
    
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Search News</h2>
      <SearchForm searchFor={search}/>
      {isLoading && !searchedNews.length && <div className="p-4">Loading...</div>}
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
            ) : (
                <p className="lead">No results!</p>
            )}
      {(searchedNews.length && !isLoading) 
        ? <button onClick={loadMoreNews} className="Btn-tertiary btn">More</button>
        : <></>}
    </div>
  )
};

export default SearchNews;

// {searchedNews.length
//   ? (
//       <div className="d-flex flex-row justify-content-center align-items-center flex-wrap my-5">
//         {searchedNews.map( 
//           ({ 
//             uuid, 
//             title, 
//             description, 
//             keywords, 
//             snippet, 
//             url, 
//             language, 
//             locale, 
//             image_url, 
//             source, 
//             published_at 
//             }, idx) => {
//             const nObj = { uuid, title, description, keywords, snippet, url, language, locale, image_url, source, published_at };
//             return (
//             <NewsCard 
//               key={`${uuid}${idx}`}
//               newsObj={nObj}
//               updateRecentlyVisited={updateRecentlyVisited} />
//               )}
//           )
//         }
//       </div>
//   ) : (
//       <p className="lead">Sorry, no results were found!</p>
// )}