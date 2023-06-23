"use strict";

/** Database setup for mornoonights news app. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

async function db() {
  try {
    let client = null;
  
    if (process.env.NODE_ENV === "production") {
      client = new Client({
        connectionString: getDatabaseUri(),
        ssl: {
          rejectUnauthorized: false
        }
      });
    } else {
      client = new Client({
        connectionString: getDatabaseUri()
      });
    }
    
    client.connect();
  } catch (err) {
    console.log('err')
  }

}

module.exports = db;