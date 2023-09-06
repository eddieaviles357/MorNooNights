import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class MorNooNightsNewsAPI {
  // token to interact with the API
  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug(
        "API CALL::", endpoint, 
        "DATA::", data, 
        "METHOD::", method
        ); 

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MorNooNightsNewsAPI.token}` };
    const params = (method === "get") ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("AP::ERROR::", err.response);
      let message = err.response.data.error.message;
      // throw array of errors
      throw Array.isArray(message) ? message : [message];
    }
  };

  // API routes

  /******* User specific API endpoints ********/
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  };

  static async getRecents(username) {
    const res = await this.request(`users/${username}/recents`);
    console.log('%cAPI::FRONTEND::GET_RECENTS', "color: yellow; font-size: 20px;", res);
    return res;
  };

  static async updateRecents(username, data) {
    console.log("%cAPI::FRONTEND::UPDATE_RECENTS", "color: yellow; font-size: 20px;", data)
    const res = await this.request(`users/${username}/recents`, data , "post");
  }

  /****** News specific API endpoints *******/
  static async getTopNews(name = '', page = 1) {
    let res = await this.request(`news/top/${page}`);
    console.log('%cAPI::FRONTEND::NEWS::GET_TOP_NEWS', "color: yellow; font-size: 20px;", res);
    return res;
  };

  static async searchNews(val, page = 1) {
    const res = await this.request(`news/search/${val}/${page}`);
    console.log("%cAPI::FRONTEND::NEWS::SEARCH_NEWS::", "color: yellow; font-size: 20px;", res);
    return res;
  }

  static async getNewsByCategory(category, page = 1) {
    const res = await this.request(`news/category/${category}/${page}`);
    console.log("%cAPI::FRONTEND::NEWS::GET_NEWS_BY_CATEGORY", "color: yellow; font-size: 20px;", res);
    return res;
  }

  // Get token for login.
  /**** AUTH specific endpoints *******/
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  };

  // Signup for site.
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  };


};

export default MorNooNightsNewsAPI;