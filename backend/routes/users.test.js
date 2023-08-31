"use strict";

const request = require("supertest");

const app = require("../app");
const User = require("../models/User");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  uuids,
  u1Token, 
  u2Token,
  u3Token,
  users
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** GET /users/:username */

describe("GET /:username", function () {
  test("gets user info using user info", async function () {
    const resp = await request(app)
    .get("/users/user1")
    .set("authorization", `Bearer ${u1Token}`);
    users[0]["createdAt"] = new Date(users[0]["createdAt"]).toISOString();
    expect(resp.statusCode).toEqual(200);
    expect(resp.body.user).toEqual(users[0]);
  });
});

describe("GET /:username", function () {
  test("gets user using admin credentials", async function () {
    const resp = await request(app)
    .get("/users/user1")
    .set("authorization", `Bearer ${u2Token}`);
    users[0]["createdAt"] = new Date(users[0]["createdAt"]).toISOString();
    expect(resp.statusCode).toEqual(200);
    expect(resp.body.user).toEqual(users[0]);
  });
});

describe("GET /:username", function () {
  test("fails using other user", async function () {
    const resp = await request(app)
    .get("/users/user1")
    .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(401);
  });
});


/************************************** GET /users/:username/recents */
describe("GET /:username/recents", function () {
  test("gets user recently viewed news", async function () {
    const userRecents = await User.getRecents("user1");
    const resp = await request(app)
      .get("/users/user1/recents")
      .set("authorization", `Bearer ${u1Token}`);
    const {recents} = resp.body;
    expect(resp.statusCode).toEqual(200);
    expect(recents[0]["description"]).toEqual(userRecents[0]["description"]);
  });
});

describe("GET /:username/recents", function () {
  test("gets user recently viewed news using admin credentials", async function () {
    const userRecents = await User.getRecents("user1");
    const resp = await request(app)
      .get("/users/user1/recents")
      .set("authorization", `Bearer ${u2Token}`);
    const {recents} = resp.body;
    expect(resp.statusCode).toEqual(200);
    expect(recents[0]["description"]).toEqual(userRecents[0]["description"]);
  });
});

describe("GET /:username/recents", function () {
  test("fails with wrong user access", async function () {
    const userRecents = await User.getRecents("user1");
    const resp = await request(app)
      .get("/users/user1/recents")
      .set("authorization", `Bearer ${u3Token}`);
    const {recents} = resp.body;
    expect(resp.statusCode).toEqual(401);
  });
});