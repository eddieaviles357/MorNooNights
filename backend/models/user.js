"use strict";

const db = require("../db.js");
const bcrypt = require("bcrypt");
const { BadRequestError } = require("../MornoonightsError.js");
const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
    /** Register user with data.
   * { username, first_name, last_name, password, email, is_admin }
   * Returns { username, firstName, lastName, email, isAdmin, createdAt }
   * 
   *
   * Throws BadRequestError on duplicates.
   **/

    static async register({ username, first_name, last_name, password, email, is_admin }) {

        const doesUserExist = await db.query(
            `SELECT username FROM users WHERE username = $1`, [username]
            );

        if(doesUserExist.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${username}`)
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const userResult = await db.query(`
            INSERT INTO users 
            (username, first_name, last_name, password, email, is_admin)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING 
                username, 
                first_name AS "firstName", 
                last_name AS "lastName", 
                email, 
                is_admin AS "isAdmin", 
                created_at AS "createdAt"`, 
                [username, first_name, last_name, hashedPassword, email, is_admin]
            );
            
        const user = userResult.rows[0];

        return user;
    }
};

module.exports = User;