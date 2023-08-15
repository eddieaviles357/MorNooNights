import React, { useState, useEffect } from 'react';
import Navigation from "./components/routes-nav/Navigation"
import AppRoutes from "./components/routes-nav/Routes"
import useLocalStorage from "./components/hooks/useLocalStorage";
import UserContext from "./components/auth/UserContext";
import { BrowserRouter } from 'react-router-dom';
import MorNooNightsNewsAPI from "./api/api";
import jwt from "jsonwebtoken";
import "./App.css";

// Used for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "mornoonightsnews-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [news, setNews] = useState(null);
  const [visitedNews, setVisitedNews] = useLocalStorage("recents");
  const [topNews, setTopNews] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  // console.debug("currentUser", currentUser, "token", token);

  // is mounted is used for React development since it calls useEffect twice
  async function search(mounted = false, name = '', page = 1) {
    if(!mounted) setCurrPage(2);
    try {
      const news = await MorNooNightsNewsAPI.getTopNews(name, page);
      // used for testing so we won't exhaust our api calls
      // const news = fakeData;
      const { data: { data } } = news;

      console.log('extracted_data_',data);
      !mounted ? 
        setTopNews( data ) :
        setTopNews( prev => [ ...prev, ...data ]);
    } catch (err) {
      console.log(err);
    }
  };

  async function loadMoreTopNews() {
    setCurrPage(_=>currPage+1);
    search(true, '', currPage);
  }

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // add token to api class so we can interact with
          MorNooNightsNewsAPI.token = token;
          let currentUser = await MorNooNightsNewsAPI.getCurrentUser(username);
          setCurrentUser(currentUser);
          search();
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      };
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // Handles site logout.
  async function logout() {
    try {
      const { username } = currentUser;
      const data = { recents: JSON.parse(visitedNews) };
      console.log("__LOGGIING_OUT__::", data)
      await MorNooNightsNewsAPI.updateRecents(username, data);
    } catch (errors) {
      alert("failed to update recents", errors);
    }
    setCurrentUser(null);
    setToken(null);
    setVisitedNews(null);
    // update recent news
  }

  /** Handles site signup.
 *
 * Automatically logs them in (set token) upon signup.
 *
 */
  async function signup(signupData) {
    try {
      let token = await MorNooNightsNewsAPI.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  };

  // Handles site login.

  async function login(loginData) {
    try {
      let token = await MorNooNightsNewsAPI.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  };

  // handles visited news update to db
  const updateRecentlyVisited = (news) => {
    // if no data is available set to empty array
    const visited = JSON.parse(visitedNews) || [];
    const updatedNews = {...news, visited_at: new Date().toDateString() }
    console.log('%cUPDATED::NEWS::', 'color: lightblue;', updatedNews);
    // allows only 5 entries
    if(visited.length >= 5) visited.shift(); // remove 1st entry
    visited.push(updatedNews)
    // console.log("__HANDLE_CLICK__", updatedNews)
    // stringify visited news and update values
    setVisitedNews( _ => JSON.stringify(visited) )
  }

  if (!infoLoaded) return <div className="text-center">Loading...</div>;

  return (
    <div className="App">
    <BrowserRouter>
      <UserContext.Provider value={{ 
        currentUser, 
        setCurrentUser, 
        visitedNews, 
        setVisitedNews,
        updateRecentlyVisited,
        news,
        setNews,
        loadMoreTopNews,
        topNews,
        setTopNews
        }}>
        <Navigation logout={logout}/>
        <AppRoutes login={login} signup={signup}/>
      </UserContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;

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