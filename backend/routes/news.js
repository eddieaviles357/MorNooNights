"use strict";

const router = require("express").Router();
const { BASE_URL, LANG_EN, LOCALE_US, API_TOKEN, LIMIT } = require("../config");
const axios = require("axios");
const { NotFoundError } = require("../MornoonightsError");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { 
  FAKE_DATA, 
  FAKE_DATA_CATEGORIES,
  FAKE_DATA_SEARCH
} = require("../mockData");

const User = require("../models/User");

// all endpoint have to have a valid logged in user

/** Gets Top news.
* 
* Returns possible results
* { 
*   data: {
*       meta: { found, returned, limit, page }, 
*       data: [ 
*           { uuid, title, description, keywords,
*             snippet, url, image_url, language,
*             published_at, source, categories: [], 
*             relevance_score, locale } 
*           ] 
*   }
* }
*
* Throws NotFoundError on no news.
**/
router.get("/top/:page", async (req, res, next) => {
    try {
        let page = req.params.page || 1;
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
            return res.json({ data: FAKE_DATA })
        }
        const endPoint = `top?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${LIMIT}&page=${page}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        if(!data) throw new NotFoundError("No News found");
        // console.log('GET::news/top::', data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

/** Gets news by categories.
*  categories can be
*  -> tech, travel, business, entertainment, general, food, politics, sports, science
* Returns obj similar to
*{
*	data: {
*       meta: { found, returned, limit, page },
*       data: [ 
*           { uuid, title, description, keywords,
*             snippet, url, image_url, language,
*             published_at, source, categories: [], relevance_score } 
*           ] 
*	}
*}
*  
* if no data is found returns object with no data
* {
* 	data: { 
*       meta: { found, returned, limit, page }, 
*       data: [] 
*   }
* }
**/
router.get("/category/:categories/:page", async (req, res, next) => {
    try {
        const { categories, page } = req.params;
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
            return res.json({ data: FAKE_DATA_CATEGORIES });
        }
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&categories=${categories}&page=${page}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        // console.log('GET::news/CATEGORY/:categories::', data, page);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

/** Gets news by search.
* 
* Returns news obj
* {
*	data: {
*       meta: { found, returned, limit, page },
*		data: [
*			{
*				uuid, title, description, keywords,
*				snippet, url, image_url, language,
*				published_at, source, categories: [], relevance_score
*			}
*		]
*	}
* }
*  
* Returns data object with no data.
* {
*	data: { meta: { found, returned, limit, page }, data: [] }
* }
**/
router.get("/search/:value/:page", async function(req, res, next) {
    try {
        const { value, page } = req.params;
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
            return res.json({ data: FAKE_DATA_SEARCH });
        }
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&search=${value}&${LIMIT}&page=${page}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        // console.log('GET::/search/VALUE::', data, '\nvalue',value)
        return res.json({ data });
    } catch (err) {
        return next(err);
    }
});

/** Gets single news by uuid.
* 
* Returns singe news
* {
*   data: { 
*       uuid, title, description, keywords,
*       snippet, url, image_url, language,
*       published_at, source, categories: [], 
*   }
* }
*  
* Throws NotFoundError on no news.
**/
router.get("/uuid/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
          return res.json({ data: FAKE_DATA.data[0] });
        }
        const endPoint = `uuid/${id}?${API_TOKEN}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
        // console.log('GET::news/UUID/id::', data);
        return res.json({ data })
    } catch (err) {
        next(err);
    }
});

module.exports = router;