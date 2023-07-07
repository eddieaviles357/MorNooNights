"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "MorNooNigthsNewsAppSecretDev";

const PORT = +process.env.PORT || 3001;

const API_KEY = process.env.API_KEY;

const BASE_URL = `https://api.thenewsapi.com/v1/news`;
const LANG_EN = "language=en";
const LOCALE_US = "locale=us";
const API_TOKEN = `api_token=${API_KEY}`;
const LIMIT = "limit=3"; // max allowed

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "mornoonights_test"
      : process.env.DATABASE_URL || "mornoonights";
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("*********************************************")
console.log("*********   MorNooNights Config   ***********\n")
console.log("1:SECRET_KEY         :  ", SECRET_KEY);
console.log("2:PORT               :  ", PORT.toString());
console.log("3:BCRYPT_WORK_FACTOR :  ", BCRYPT_WORK_FACTOR);
console.log("4:Database           :  ", getDatabaseUri());
console.log("\n*********   MorNooNights Config   ***********")
console.log("*********************************************\n")

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
  API_KEY,
  BASE_URL,
  LANG_EN,
  LOCALE_US,
  API_TOKEN,
  LIMIT
};
