import React, { useState, useEffect } from "react";
// import SearchForm from "../common/SearchForm";
import MorNooNightsNewsAPI from "../../api/api";
import NewsCard from "./NewsCard";

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

  useEffect(() => {
    console.debug("TopNews useEffect");
    /** Triggered by search form submit; reloads news. */
    async function search(name) {
      try {
        // let news = await MorNooNightsNewsAPI.getTopNews(name);
        // console.log('inside useEffect news["data"]', news['data'])
        let news = fakeData;

        setTopNews(news.data);
      } catch (err) {
        setErrors(err)
      }
    }
    search();
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
      <div className="d-flex flex-row justify-content-center align-items-center" style={{width: "100%;"}}>
        {/* <SearchForm searchFor={search} /> */}
        {topNews.data.length
            ? (
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                  {topNews.data.map(n => (
                    <NewsCard 
                      key={n.uuid}
                      title={n.title}
                      description={n.description}
                      keywords={n.keywords}
                      snippet={n.snippet}
                      url={n.url}
                      language={n.language}
                      categorires={n.categorires}
                      locale={n.locale}
                      imageURL={n.image_url}
                      source={n.source}
                      publishedAt={n.published_at} />
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
}
]}}