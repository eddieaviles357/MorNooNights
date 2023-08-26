"use strict";

const db = require("../db.js");
const User = require("../models/User");
const createToken = require("../helpers/tokens");

const uuids = [];

const recents = [
  {
    uuid: '8fc8718e-1b93-4baa-8013-058821959122',
    visited_at: "2023-08-20 09:00:00",
    title: 'Man found dead following shed fire in Palmer',
    description: "The shed was ablaze when firefighters arrived, with flames “threatening to spread to the residence and nearby woods,” officials said.",
    keywords: "",
    snippet: "“Our hearts go out to this man’s family and loved ones,” Palmer Fire Chief William J. Bernat Jr. said in the statement. “On behalf of the Palmer Fire De...",
    url: "https://www.bostonglobe.com/2023/07/17/metro/man-found-dead-following-shed-fire-palmer/?camp=bg:brief:rss:feedly&rss_id=feedly_rss_brief",  
    language: "en",
    categories: ['general'],
    locale: "us",
    image_url: "https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=420",
    source: "bostonglobe.com",
    published_at: "2023-07-18T01:51:32.000000Z",
  }, 
  {
    uuid: "ab6b9480-a610-4a71-a7e4-6023b525c105",
    visited_at: "2023-08-21 10:00:00",
    title: "Emily Blunt Reveals Cillian Murphy’s Strict Oppenheimer Diet",
    description: "The shed was ablaze when firefighters arrived, with flames “threatening to spread to the residence and nearby woods,” officials said.",
    keywords: "",
    snippet: "Watch : Matt Damon & Emily Blunt Reveal Their Daughters' CLOSE Bond\n\nCillian Murphy's role in Oppenheimer pushed him to extreme lengths.\n\nIn fact, his co-star E...",
    url: "https://www.eonline.com/news/1380473/emily-blunt-reveals-cillian-murphy's-strict-lessigreateroppenheimerlessigreater-diet?cmpid=rss-syndicate-genericrss-us-top_stories",  
    language: "en",
    categories: ['entertainment', 'general'],
    locale: "us",
    image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/2023617/rs_1200x1200-230717170936-1200-Emily-Blunt-Cillian-Murphy.cm.71723.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    source: "eonline.com",
    published_at: "2023-07-18T01:49:03.000000Z",
  }, 
  {
    uuid: 'cad54b33-860d-4bbd-96e6-e5551ec4fac2',
    visited_at: "2023-08-22 11:00:00",
    title: "Singapore’s passport is now the most powerful in the world. Here's how other countries ranked",
    description: "Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.",
    keywords: "U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news",
    snippet: "Singapore has overtaken Japan to boast of the world's most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...",
    url: "https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html",  
    language: "en",
    categories: ['general', 'business'],
    locale: "us",
    image_url: "https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080",
    source: "cnbc.com",
    published_at: "2023-07-19T02:24:26.000000Z",
  },
];

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM recents");

  uuids[0] = recents[0]["uuid"];
  uuids[1] = recents[1]["uuid"];
  uuids[2] = recents[2]["uuid"];

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
  
  await User.setRecents("user1", recents );
  await User.setRecents("user2", recents );
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
};