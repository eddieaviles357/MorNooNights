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
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&categories=${categories}&page=${page}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        console.log('GET::news/CATEGORY/:categories::', data, page);
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
        console.log("BACKEND::VALUE\n", req.params)
        const endPoint = `all?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&search=${value}&${LIMIT}&page=${page}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
        console.log('GET::/search/VALUE::', data, '\nvalue',value)
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
router.get("uuid/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const endPoint = `uuid/${id}?${API_TOKEN}`;
        const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
        // console.log('GET::news/UUID/id::', data);
        return res.json({ data })
    } catch (err) {
        next(err);
    }
});

module.exports = router;

// ( ONLY FOR PAID ACCOUTNS )

/** Gets news Headlines.
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
// router.get("/sources/:page", async (req, res, next) => {
//     try {
//         const PAGE = `page=${req.params.page}`;
//         const endPoint = `sources?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${PAGE}`;
//         const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
//         if(!data) throw new NotFoundError("No News found");
//         console.log('GET::news/sources::', data);
//         return res.json({ data })
//     } catch (err) {
//         return next(err);
//     }
// });

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
// router.get("/similar/:uuid", async (req, res, next) => {
//     try {
//         const { uuid } = req.params;
//         const endPoint = `similar/${uuid}?${API_TOKEN}&${LOCALE_US}&${LANG_EN}&${LIMIT}`;
//         const { data } = await axios.get(`${BASE_URL}/${endPoint}`)
//         console.log('GET::news/similar/UUID::', data);
//         return res.json({ data })
//     } catch (err) {
//         next(err);
//     }
// });

/**** FAKE API DATA ******
 * ***********************
 * 
 */

const FAKE_DATA = {
    meta: { found: 784202, returned: 3, limit: 3, page: 1 },
    data: [
      {
        uuid: 'f163aa79-07a0-4673-8752-902323cd2685',
        title: 'Simone Biles Shows She’s Not Just Easing Her Way Back',
        description: 'In just her second elite meet following a two-year hiatus, Biles, 26, won a record eighth U.S. all-around title and became the oldest gymnast to win the champio...',
        keywords: '',
        snippet: 'That perhaps could partially be chalked up to her attitude: “It’s just gymnastics,” she has told her younger teammates. Keeping with her relaxed demeanor,...',
        url: 'https://www.nytimes.com/2023/08/27/sports/simone-biles-gymnastics-championships.html',
        image_url: 'https://static01.nyt.com/images/2023/08/27/multimedia/27gym-biles-top-cbjv/27gym-biles-top-cbjv-facebookJumbo.jpg',
        language: 'en',
        published_at: '2023-01-28T02:57:13.000000Z',
        source: 'nytimes.com',
        categories: [Array],
        relevance_score: null,
        locale: 'us'
      },
      {
        uuid: 'bce0958b-d645-417c-8a81-c571719af8a6',
        title: 'Simone Biles wins a record 8th U.S. gymnastics title a full decade after her first',
        description: 'Biles became the oldest woman to win a national title since USA Gymnastics began organizing the event in 1963. Her eight crowns moved her past Alfred Jochim, wh...',
        keywords: '',
        snippet: 'Simone Biles wins a record 8th U.S. gymnastics title a full decade after her first\n' +
          '\n' +
          'Enlarge this image toggle caption Godofredo A. Vásquez/AP Godofredo A. Vás...',
        url: 'https://www.npr.org/2023/08/27/1196274503/simone-biles-wins-a-record-8th-u-s-gymnastics-title-a-full-decade-after-her-firs',
        image_url: 'https://media.npr.org/assets/img/2023/08/27/ap23239779365476_wide-91818d99986b4dc474aa1ff648773af3110113b0-s1400-c100.jpg',
        language: 'en',
        published_at: '2023-01-28T02:51:07.000000Z',
        source: 'npr.org',
        categories: [Array],
        relevance_score: null,
        locale: 'us'
      },
      {
        uuid: '57f3339d-71e5-4a21-b9ed-6e4a31260f57',
        title: 'Ron DeSantis booed at vigil as hundreds mourn victims of racially-motivated Jacksonville shooting',
        description: 'Hundreds of people gathered Sunday at prayer vigils and in church to mourn the three people killed in a racially-motivated shooting at a Dollar General in Jacks...',
        keywords: 'News, florida, jacksonville, mass shootings, racism, Ron DeSantis, shootings',
        snippet: 'JACKSONVILLE, Fla. — Hundreds of people gathered Sunday at prayer vigils and in church, in frustration and exhaustion, to mourn yet another racist attack in A...',
        url: 'https://nypost.com/2023/08/27/ron-desantis-booed-at-vigil-for-victims-of-racially-motivated-jacksonville-shooting/',
        image_url: 'https://nypost.com/wp-content/uploads/sites/2/2023/08/newspress-collage-l3r85vx4q-1693187699533.jpg?quality=75&strip=all&1693173461&w=1024',
        language: 'en',
        published_at: '2023-01-28T02:44:05.000000Z',
        source: 'nypost.com',
        categories: [Array],
        relevance_score: null,
        locale: 'us'
      }
    ]
  }