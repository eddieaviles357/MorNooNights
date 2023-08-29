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
  news
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /auth/token */

describe("POST /news/top/:page", function () {
  test("works and returns a news depending on page", async function () {
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
