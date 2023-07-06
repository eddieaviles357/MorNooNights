"use strict";

const router = require("express").Router();
const { API_KEY } = require("../config");
const axios = require("axios");
const { NotFoundError } = require("../MornoonightsError");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");

const User = require("../models/User");

const BASE_URL = `https://api.thenewsapi.com/v1/news/`;
const LANG_EN = "language=en";
const LOCALE_US = "locale=us";

// all endpoint have to have a valid user logged

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
router.get("/top", async (req, res, next) => {
    try {
        const endPoint = `top?api_token=${API_KEY}&${LOCALE_US}&${LANG_EN}`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`);
        if(!data) throw new NotFoundError("No News found");
        console.log('news/top::', data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

/** Gets Sources.
* 
* Returns possible results
* {
*	data: {
*       meta: { found, returned, limit, page },
*		data: [ { source_id,domain,language,locale, categories: [] } ]
*   }
*/
router.get("/sources", async (req, res, next) => {
    try {
        const endPoint = `sources?api_token=${API_KEY}&${LOCALE_US}&${LANG_EN}`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`)
        if(!data) throw new NotFoundError("No News found");
        console.log('news/sources::', data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

/** Gets news Headlines. ( ONLY FOR PAID ACCOUTNS)
* 
* Returns latest headlines
*  
* Throws NotFoundError on no news.
**/
// router.get("/headlines", async (req, res, next) => {
//     try {
//         const endPoint = `headlines?api_token=${API_KEY}&${LOCALE_US}&${LANG_EN}`;
//         const {data} = await axios.get(`${BASE_URL}${endPoint}`)
//         if(!data) throw new NotFoundError("No News found");
//         console.log('news/HEADLINES::', data);
//         return res.json({ data })
//     } catch (err) {
//         return next(err);
//     }
// });




/** Gets news by categories.
*  categories can be -> tech, travel, business, entertainment, general, food, politics
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
router.get("/category/:categories", async (req, res, next) => {
    try {
        const { categories } = req.params;
        const endPoint = `all?api_token=${API_KEY}&${LOCALE_US}&${LANG_EN}&${`categories=${categories}`}`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`);
        console.log('news/CATEGORY/:categories::', data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

// https://api.thenewsapi.com/v1/news/all?api_token=YOUR_API_TOKEN&search=usd | gbp
/** Gets news by search.
* 
* Returns news obj
*  
* Throws NotFoundError on no news.
**/




/** Gets news by similar story.
* 
* Returns news obj
* {
*	data: {
*       meta: { found, returned, limit, page },
*		data: [ 
*            { uuid, title, description, keywords,
*				snippet, url, image_url, language,
*				published_at, source, categories: [], relevance_score } 
*        ]
*	 }
* }
*  
* Throws NotFoundError on no news.
**/
router.get("/similar/:uuid", async (req, res, next) => {
    try {
        const { uuid } = req.params;
        const endPoint = `similar/${uuid}?api_token=${API_KEY}&${LOCALE_US}&${LANG_EN}`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`)
        console.log('news/similar/UUID::', data);
        return res.json({ data })
    } catch (err) {
        next(err);
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
router.get("/:uuid", async (req, res, next) => {
    try {
        const { uuid } = req.params;
        const endPoint = `uuid/${uuid}?api_token=${API_KEY}`;
        const {data} = await axios.get(`${BASE_URL}${endPoint}`)
        console.log('news/UUID::', data);
        return res.json({ data })
    } catch (err) {
        next(err);
    }
});

/** Gets recents news from User.
* 
* Returns recent news obj
* {
*	 recents: [
*		{ uuid, title, description, keywords,
*		  snippet, url, image_url, language,
*		  published_at, source, categories: [], visitedAt }
*	 ]
* }
*  
* Returns an Empty array [] if no recent news exist.
*
* If an error occurs in retrieving recent news an error obj will return { error: msg }
**/
router.get("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
    try {
        const { username } = res.locals.user; 
        // get recently visited news -> [{ uuid, visitedAt}]
        let recents = await User.getRecents(username);
        // if any recents exist loop through array and call TheNewsApi using uuid
        if(recents.length > 0) {
            recents = await Promise.all(
                recents.map( async ({uuid, visitedAt}) => {
                    try {
                        const endPoint = `uuid/${uuid}?api_token=${API_KEY}`;
                        const {data} = await axios.get(`${BASE_URL}${endPoint}`);
                        data['visitedAt'] = visitedAt; // add visitedAt key and value
                        return data;
                    } catch (err) {
                        return {error: `could not fetch news uuid: ${uuid}`};
                    }
                })
            );
        };
        console.log('\nNEWS/{username}/RECENTS::', recents);
        return res.json({ recents });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;