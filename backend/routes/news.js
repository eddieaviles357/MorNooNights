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
*	"data": {
*		"meta": {
*			"found": 68748,
*			"returned": 50,
*			"limit": 50,
*			"page": 1
*		},
*		"data": [
*			{
*				"source_id": "faz.net-1",
*				"domain": "faz.net",
*				"language": "de",
*				"locale": null,
*				"categories": [
*					"general"
*				]
*			},
*       ]
*  }
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
* 
* Returns same as top news but with just categories
*  
* Throws NotFoundError on no news.
**/
router.get("/category/:categories", async (req, res, next) => {
    try {
        return res.json({ test: 'test'})
    } catch (err) {
        return next(err);
    }
});

// https://api.thenewsapi.com/v1/news/similar/uuid
/** Gets news by similar story.
* 
* Returns news obj
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

router.get("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
    try {
        const { username } = res.locals.user; 
        // get recently visited news -> [{ uuid, visitedAt}]
        let recents = await User.getRecents(username);
        // if any exist loop through recents array and call TheNewsApi using uuid
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

/** Gets single news by uuid.
* 
* Returns singe news
*{
*	"data": {
*		"uuid": "9324cd84-fecc-47e0-a053-d2a87fea1da4",
*		"title": "Influenciadora que foi amante de Neymar expõe intimidade entre 4 paredes e esculacha: 'Já conheci mais interessantes'",
*		"description": "A influenciadora Fernanda Campos, que expôs ter ficado com ...",
*		"keywords": "",
*		"snippet": "A influenciadora Fernanda Campos, que expôs ter ficado com ...",
*		"url": "https://www.terra.com.br/diversao/tv/influenciadora-que-foi-amante-de-neymar-expoe-intimidade-entre-4-paredes-e-esculacha-ja-conheci-mais-interessantes,3e832117cd46360d7d85e55cb47f36e4j87y3x89.html",
*		"image_url": "https://s1.trrsf.com/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
*		"language": "pt",
*		"published_at": "2023-06-26T00:46:44.000000Z",
*		"source": "terra.com.br",
*		"categories": [
*			"general",
*			"tech"
*		]
*	}
*}
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

module.exports = router;