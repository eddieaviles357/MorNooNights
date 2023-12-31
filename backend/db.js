"use strict";

/** Database setup for mornoonights news app. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");


let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client();
}

db.connect();

module.exports = db;