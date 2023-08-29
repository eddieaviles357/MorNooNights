"use strict";

const request = require("supertest");

const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token, 
  u2Token,
  news,
  categoryNews
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /news/top/:page */

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


/************************************** POST "/category/:categories/:page" */
describe("GET /category/:categories/:page", function () {
  test("works and returns a news based on category given", async function () {
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