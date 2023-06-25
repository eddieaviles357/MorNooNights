"use strict";

const router = require("express").Router();
const { API_KEY } = require("../config");
const axios = require("axios");
const { NotFoundError } = require("../MornoonightsError");

const BASE_URL = `https://api.thenewsapi.com/v1/news/`

/** Gets Top news.
* 
* Returns possible results
* { 
*   data: {
*        meta: { 
*           found: 11886289,
*           returned: 3,
*           limit: 3,
*           page: 1
*        }
*   }, data: [
*       { 
*           uuid: "14371e1e-f136-4ed0-b1cb-f8abe6d5497e",
*           title: "News title",
*           description: "News description",
*           keywords: "",
*           snippet: "News snippet",
*           url: "https://www.newsurl.com/",
*           image_url: "https://imageurl",
*           language: "en",
*				"published_at": "2023-06-25T01:39:52.000000Z",
*				"source": "foreignpolicy.com",
*				"categories": [
*					"general",
*					"politics"
*				],
*				"relevance_score": null,
*				"locale": "us"
*           }
*       ] 
*    }
* }
*
* Throws NotFoundError on no news.
**/
router.get("/top", async (req, res, next) => {
    try {
        const endPoint = `top?api_token=${API_KEY}&locale=us&limit=3`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`);
        if(!data) throw new NotFoundError("No News found");
        console.log(data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});



module.exports = router;