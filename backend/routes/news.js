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
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
            return res.json({ data: FAKE_DATA_CATEGORIES });
        }
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
        // for testing purposes so we won't exhaust our api calls
        if(process.env.NODE_ENV === "test") {
            return res.json({ data: FAKE_DATA_SEARCH });
        }
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

  const FAKE_DATA_CATEGORIES = {
    meta: { found: 1622890, returned: 3, limit: 3, page: 1 },
    data: [ 
      {
        uuid: '36edf22e-e6ad-4ba9-a7b0-21b3dfb60910',
        title: 'The US Air Force wants $6 billion for 2,000 AI drones',
        description: "Pilots' Goose cooked as uncrewed vehicles prove cheaper and perhaps more versatile",
        keywords: '',
        snippet: 'The US Air Force wants to spend around $5.8 billion on up to 2,000 pilotless AI-powered drones, to serve alongside human pilots.\n' +
          '\n' +
          'Earlier this month, colonel Tu...',
        url: 'https://www.theregister.com/2023/08/29/us_airforce_drones/',
        image_url: 'https://regmedia.co.uk/2023/08/29/valkyrie.jpg',
        language: 'en',
        published_at: '2023-08-29T02:55:43.000000Z',
        source: 'theregister.com',
        categories: [ 'tech', 'general' ],
        relevance_score: null
      },
      {
        uuid: '52585f26-afa3-4731-bcd3-6a627a8a11ba',
        title: 'This video of a Southwest Airlines flight attendant rapping the inflight instructions is such a mood',
        description: '"Best morning flight ever. This flight attendant was awesome!" the passenger wrote in a post on X, formerly Twitter.',
        keywords: '',
        snippet: 'This rapping Southwest Airlines flight attendant is such a mood.\n' +
          '\n' +
          "The unnamed flight attendant was seen rapping the inflight instructions on a passenger's X pos...",
        url: 'https://www.insider.com/southwest-flight-attendant-rapped-inflight-instructions-2023-8',
        image_url: 'https://i.insider.com/64ed499c3c42320019c06b3a?width=1200&format=jpeg',
        language: 'en',
        published_at: '2023-08-29T02:53:57.000000Z',
        source: 'insider.com',
        categories: [ 'general', 'entertainment', 'tech' ],
        relevance_score: null
      },
      {
        uuid: '4de8aa53-ad70-456d-97e2-7b91461bea9e',
        title: 'I struggled with my weight when I lived in the US. But when I moved to Japan, I picked up 5 simple habits that have turned my health around.',
        description: "Japanese eating habits taught me that there's nothing wrong with using store-bought dressing on some chicken steamed in the microwave.",
        keywords: '',
        snippet: 'Kaki Okumura is a Japanese wellness writer who grew up in the US and Japan.\n' +
          '\n' +
          'She picked up daily habits while living in Japan that help her maintain a healthy w...',
        url: 'https://www.insider.com/japanese-eating-habits-to-follow-for-a-healthy-weight-2023-8',
        image_url: 'https://i.insider.com/64e8603252bc2d001991d8af?width=1200&format=jpeg',
        language: 'en',
        published_at: '2023-08-29T02:53:57.000000Z',
        source: 'insider.com',
        categories: [ 'general', 'entertainment', 'tech' ],
        relevance_score: null
      }
     ]
};

const FAKE_DATA_SEARCH = {
    meta: { found: 332103, returned: 3, limit: 3, page: 1 },
    data: [
      {
        uuid: '37765bc2-3505-448c-9d3f-1e554e61114e',
        title: 'Hot Pockets Hot Ones',
        description: 'Frozen snack brand teams with YouTube sensation on spiciest varieties ever',
        keywords: 'Hot Pockets Hot Ones, Nestle USA, Hot Sauce, Spicy, First We Feast, Heatonist, Tie-In Products, Handheld Snacks',
        snippet: 'Beloved frozen handheld snack brand Hot Pockets has joined forces with First We Feast’s popular YouTube interview show “Hot Ones” to produce items that in...',
        url: 'https://progressivegrocer.com/hot-pockets-hot-ones',
        image_url: 'https://assets1.progressivegrocer.com/files/styles/primary_articles_short/s3/2023-08/hot_pockets_hot_ones_last_dab_apollo_teaser.png?h=73306683&itok=8YQt7slE',
        language: 'en',
        published_at: '2023-08-28T14:00:00.000000Z',
        source: 'progressivegrocer.com',
        categories: [Array],
        relevance_score: 21.901957
      },
      {
        uuid: '7065e5bc-3b8b-4f8a-97c8-297656d51938',
        title: 'Infinix Hot 11s | Infinix Hot 11s Price | Infinix Hot 11s Specifications',
        description: 'Infinix Hot 11s, In this article you can find out Infinix Hot 11s Price and Infinix Hot 11s Specifications. Infinix Hot 11s is a fresh out of the plastic new Ho...',
        keywords: '',
        snippet: 'Infinix Hot 11s | Infinix Hot 11s Price | Infinix Hot 11s Specifications ch sb Just now·3 min read\n' +
          '\n' +
          'Infinix Hot 11s | Infinix Hot 11s Price | Infinix Hot 11s S...',
        url: 'https://medium.com/@chsb28745/infinix-hot-11s-infinix-hot-11s-price-infinix-hot-11s-specifications-4b7d67d10a61',
        image_url: 'https://miro.medium.com/max/400/0*n5tuqdPt0uQWpCj0.jpg',
        language: 'en',
        published_at: '2021-09-29T04:39:58.000000Z',
        source: 'medium.com',
        categories: [Array],
        relevance_score: 21.34317
      },
      {
        uuid: '07217e3e-5862-44e3-9690-0c7b3fcebd85',
        title: 'After-School Satan Clubs Are Hot, Hot, Hot!',
        description: 'After-School Satan Clubs Are Hot, Hot, Hot! Following a major legal victory in the free speech department, after school Satan Clubs are picking up steam.…',
        keywords: 'News, Aggregator, Breaking News, Curation, Media',
        snippet: 'After-School Satan Clubs Are Hot, Hot, Hot!\n' +
          '\n' +
          '\n' +
          '\n' +
          'Following a major legal victory in the free speech department, after school Satan Clubs are picking up steam.\n' +
          '\n' +
          'La...',
        url: 'https://biztoc.com/x/02ec6643db5be27a?ref=ff',
        image_url: 'https://c.biztoc.com/p/02ec6643db5be27a/og.webp',
        language: 'en',
        published_at: '2023-05-13T23:56:04.000000Z',
        source: 'upstract.com',
        categories: [Array],
        relevance_score: 21.148346
      }
    ]
  } 