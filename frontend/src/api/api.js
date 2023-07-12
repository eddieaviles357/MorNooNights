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
      console.error("API ERROR::", err.response);
      let message = err.response.data.error.message;
      // throw array of errors
      throw Array.isArray(message) ? message : [message];
    }
  };

  // API routes

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getTopNews() {
    let res = await this.request(`users`);
    console.log('FRONTEND::TOP::NEWS', res);
  }

  // Get token for login.

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // Signup for site.

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
};

export default MorNooNightsNewsAPI;