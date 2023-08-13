"use strict";

const router = require("express").Router();
const { BASE_URL, LANG_EN, LOCALE_US, API_TOKEN, LIMIT } = require("../config");
const axios = require("axios");
const { NotFoundError } = require("../MornoonightsError");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");

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
router.get("/top", async (req, res, next) => {
    try {
        const endPoint = `top?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${LIMIT}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        if(!data) throw new NotFoundError("No News found");
        console.log('GET::news/top::', data);
        return res.json({ data })
    } catch (err) {
        return next(err);
    }
});

/** Gets Sources.
*  must provide page number -> /sources/1
*
* Returns possible results
* {
*	data: {
*       meta: { found, returned, limit, page },
*		data: [ { source_id,domain,language,locale, categories: [] } ]
*   }
*/
router.get("/sources/:page", async (req, res, next) => {
    try {
        const PAGE = `page=${req.params.page}`;
        const endPoint = `sources?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${PAGE}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
        if(!data) throw new NotFoundError("No News found");
        console.log('GET::news/sources::', data);
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
router.get("/category/:categories", async (req, res, next) => {
    try {
        const { categories } = req.params;
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${`categories=${categories}&${LIMIT}`}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        console.log('GET::news/CATEGORY/:categories::', data);
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
router.get("/search/:value", async function(req, res, next) {
    try {
        const { value } = req.params;
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&search=${value}&${LIMIT}`
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        console.log('GET::/search/VALUE::', data, '\nvalue',value)
        return res.json({ data });
    } catch (err) {
        return next(err);
    }
});




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
        const endPoint = `similar/${uuid}?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${LIMIT}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
        console.log('GET::news/similar/UUID::', data);
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
router.get("uuid/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const endPoint = `uuid/${id}?${API_TOKEN}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
        console.log('GET::news/UUID/id::', data);
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
*
* Must be correct user or admin
**/
router.get("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
    try {
        const { username } = res.locals.user; 
        // get recently visited news -> [{ uuid, visitedAt}]
        let recents = await User.getRecents(username);

        console.log('\nGET::NEWS/{username}/RECENTS::', recents);
        return res.json({ recents });
    } catch (err) {
        return next(err);
    }
});

/** Update recents news for User.
* 
* Returns undefined
*  
* Must be correct user or admin
**/
router.post("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
    try {
        const { username } = req.params; 
        let { recents } = req.body;
        
        // console.log('\nPOST::NEWS/{username}/RECENTS::');
        await User.setRecents(username, recents);
        return res.json({ success: true });
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
//         const {data} = await axios.get(`${BASE_URL}/${endPoint}`)
//         if(!data) throw new NotFoundError("No News found");
//         console.log('news/HEADLINES::', data);
//         return res.json({ data })
//     } catch (err) {
//         return next(err);
//     }
// });

module.exports = router;