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
  console.debug("TopNews");

  const [topNews, setTopNews] = useState(null);
  const [errors, setErrors] = useState(null);
  const { 
    currentUser, 
    visitedNews, 
    setVisitedNews, 
    updateRecentlyVisited 
  } = useContext(UserContext);
  

  useEffect(() => {
      /** Triggered by search form submit; reloads news. */
    async function search(name) {
      try {
        // const news = await MorNooNightsNewsAPI.getTopNews(name);
        const news = fakeData;

        setTopNews(news.data);
      } catch (err) {
        setErrors(err)
      }
    };
    console.debug("TopNews useEffect");
    search();
  }, []);

  useEffect(() => {
    async function recents(username) {
      try {
        const {recents} = await MorNooNightsNewsAPI.getRecents(currentUser.username);
        console.log('--RECENTS-API-CALL--', recents);
        setVisitedNews( JSON.stringify(recents) );

      } catch (err) {
        setErrors(Array.from(err || err.message))
      };
    };
    recents(currentUser.username);
  }, []);

  // if there are any errors display them to user
  if (errors) {
    console.error('API::ERROR::',errors);
    return <div className="d-flex justify-content-center ">{errors.map(e => (<div>Sorry an Error Ocurred</div>) )}</div>
  };
  // Loader
  if (!topNews) return <div className="p-4">Loading...</div>;
  console.log('TOP::NEWS::API::DATA', topNews)

  return (
      <div className="d-flex flex-column align-items-center">
        {topNews.data.length
            ? (
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap my-5">
                  {topNews.data.map( 
                    newsObj => (
                      <NewsCard 
                        key={newsObj.uuid}
                        newsObj={newsObj}
                        updateRecentlyVisited={updateRecentlyVisited} />
                        )
                    )
                  }
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
};

const fakeData = {data: {
  meta: {found: 738236, returned: 3, limit: 3, page: 1},
  data: [
    {
  uuid: '8fc8718e-1b93-4baa-8013-058821959122',
  title: 'Man found dead following shed fire in Palmer',
  description: "The shed was ablaze when firefighters arrived, with flames “threatening to spread to the residence and nearby woods,” officials said.",
  keywords: "",
  snippet: "“Our hearts go out to this man’s family and loved ones,” Palmer Fire Chief William J. Bernat Jr. said in the statement. “On behalf of the Palmer Fire De...",
  url: "https://www.bostonglobe.com/2023/07/17/metro/man-found-dead-following-shed-fire-palmer/?camp=bg:brief:rss:feedly&rss_id=feedly_rss_brief",  
  language: "en",
  categories: ['general'],
  locale: "us",
  image_url: "https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=420",
  source: "bostonglobe.com",
  published_at: "2023-07-18T01:51:32.000000Z",
}, {
  uuid: "ab6b9480-a610-4a71-a7e4-6023b525c105",
  title: "Emily Blunt Reveals Cillian Murphy’s Strict Oppenheimer Diet",
  description: "The shed was ablaze when firefighters arrived, with flames “threatening to spread to the residence and nearby woods,” officials said.",
  keywords: "",
  snippet: "Watch : Matt Damon & Emily Blunt Reveal Their Daughters' CLOSE Bond\n\nCillian Murphy's role in Oppenheimer pushed him to extreme lengths.\n\nIn fact, his co-star E...",
  url: "https://www.eonline.com/news/1380473/emily-blunt-reveals-cillian-murphy's-strict-lessigreateroppenheimerlessigreater-diet?cmpid=rss-syndicate-genericrss-us-top_stories",  
  language: "en",
  categories: ['entertainment', 'general'],
  locale: "us",
  image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/2023617/rs_1200x1200-230717170936-1200-Emily-Blunt-Cillian-Murphy.cm.71723.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  source: "eonline.com",
  published_at: "2023-07-18T01:49:03.000000Z",
}, {
  uuid: 'cad54b33-860d-4bbd-96e6-e5551ec4fac2',
  title: "Singapore’s passport is now the most powerful in the world. Here's how other countries ranked",
  description: "Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.",
  keywords: "U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news",
  snippet: "Singapore has overtaken Japan to boast of the world's most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...",
  url: "https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html",  
  language: "en",
  categories: ['general', 'business'],
  locale: "us",
  image_url: "https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080",
  source: "cnbc.com",
  published_at: "2023-07-19T02:24:26.000000Z",
}
]}}