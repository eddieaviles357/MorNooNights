"use strict";

const db = require("../db.js");
const User = require("../models/User");
const createToken = require("../helpers/tokens");

const uuids = [];

const categoryNews = {
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

const news = {
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

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM recents");

  uuids[0] = news.data[0]["uuid"];
  uuids[1] = news.data[1]["uuid"];
  uuids[2] = news.data[2]["uuid"];

  await User.register({
    username: "user1",
    firstName: "u1first",
    lastName: "u1last",
    email: "user1@user.com",
    password: "password1",
    isAdmin: false,
  });

  await User.register({
    username: "user2",
    firstName: "u2first",
    lastName: "u2last",
    email: "user2@user.com",
    password: "password2",
    isAdmin: false,
  });
  const updatedNews = news['data'].map( news => ({...news, visited_at: "2023-08-20 09:00:00"}))
  await User.setRecents("user1", updatedNews );
  await User.setRecents("user2", updatedNews );
}


async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}


const u1Token = createToken({ username: "u1", isAdmin: false });
const u2Token = createToken({ username: "u2", isAdmin: true });


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  uuids,
  u1Token,
  u2Token,
  news,
  categoryNews
};