"use strict";

const request = require("supertest");

const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  uuids,
  u1Token, 
  u2Token,
  news,
  categoryNews
} = require("./_testCommon");
const { FAKE_DATA } = require("../mockData");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** GET /news/top/:page */

describe("GET /news/top/:page", function () {
  test("works and returns news", async function () {
    const resp = await request(app)
        .get("/news/top/1")
        .set("authorization", `Bearer ${u1Token}`);
    const { data: { data } } = resp.body;
    expect(resp.statusCode).toEqual(200);
    expect(data).toEqual(expect.any(Array));
    expect(data).toEqual(expect.any(Object));
    expect(data.length).toEqual(3);
  });
});

describe("GET /news/top/:page", function () {
  test("fails with no valid user", async function () {
    const resp = await request(app)
        .get("/news/top/1")
    expect(resp.statusCode).toEqual(401);
    expect(resp.body).toEqual({ error: { message: 'Unauthorized', status: 401 } });
  });
});


/************************************** GET "/category/:categories/:page" */
describe("GET /category/:categories/:page", function () {
  test("works and returns news given a category", async function () {
    const resp = await request(app)
        .get("/news/category/tech/1")
        .set("authorization", `Bearer ${u1Token}`);
    const { data: { data } } = resp.body;
    expect(resp.statusCode).toEqual(200);
    expect(data).toEqual(expect.any(Array));
    expect(data).toEqual(expect.any(Object));
    expect(data.length).toEqual(3);
    // checks if all the data in "categories" has value of "tech"
    expect(data.every( n => n['categories'].some( c => c === 'tech' ) ))
    .toBe(true);
  });
});

describe("GET /category/:categories/:page", function () {
  test("fails with no valid user", async function () {
    const resp = await request(app)
        .get("/news/category/tech/1");

    expect(resp.statusCode).toEqual(401);
    expect(resp.body).toEqual({ error: { message: 'Unauthorized', status: 401 } });
  });
});

/************************************** GET "/search/:value/:page" */
describe("GET /search/:value/:page", function () {
  test("works and returns news using search value in params", async function () {
    const searchKeyword = "hot";
    const resp = await request(app)
        .get(`/news/search/${searchKeyword}/1`)
        .set("authorization", `Bearer ${u1Token}`);
    const { data: { data } } = resp.body;
    expect(resp.statusCode).toEqual(200);
    expect(data).toEqual(expect.any(Array));
    expect(data).toEqual(expect.any(Object));
    expect(data.length).toEqual(3);
    expect(data.every( n => n['title'].toLowerCase().includes(searchKeyword) ) )
    .toBe(true);
  });
});

describe("GET /search/:value/:page", function () {
  test("fails with no valid user", async function () {
    const resp = await request(app)
        .get("/news/search/hot/1");

    expect(resp.statusCode).toEqual(401);
    expect(resp.body).toEqual({ error: { message: 'Unauthorized', status: 401 } });
  });
});

/************************************** GET "uuid/:id" */
describe("GET /uuid/:id", function () {
  test("fetches news by uuid", async function () {
    const resp = await request(app)
        .get(`/news/uuid/${uuids[0]}`)
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body.data.uuid).toEqual(uuids[0]);
  });
});

describe("GET uuid/:id", function () {
  test("fails with no valid user", async function () {
    const resp = await request(app)
        .get(`/news/uuid/${uuids[0]}`);

    expect(resp.statusCode).toEqual(401);
    expect(resp.body).toEqual({ error: { message: 'Unauthorized', status: 401 } });
  });
});


