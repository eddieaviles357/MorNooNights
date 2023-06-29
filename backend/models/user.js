"use strict";

const db = require("../db.js");
const bcrypt = require("bcrypt");
const { BadRequestError } = require("../MornoonightsError.js");
const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
  /** authenticate user with username, password.
   *
   * Returns { 
   *    username, 
   *    first_name, 
   *    last_name, 
   *    email, 
   *    is_admin, 
   *    created_at }
   *
   * Throws UnauthorizedError is user not found or wrong password.
   **/

    static async authenticate(username, password) {
    // try to find the user first
        const result = await db.query(
            `SELECT username,
                    password,
                    first_name AS "firstName",
                    last_name AS "lastName",
                    email,
                    is_admin AS "isAdmin",
                    created_at AS "createdAt"
            FROM users
            WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        if (!user) throw new UnauthorizedError("Invalid username");

        // compare hashed password to a new hash from password
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid === true) {
        // remove password from user we don't want it to be returned
        delete user.password;
        return user;
        } else {
            throw new UnauthorizedError("Invalid password");
        }
    };



    /** Register user with data.
   * { username, first_name, last_name, password, email, is_admin }
   * Returns { username, firstName, lastName, email, isAdmin, createdAt }
   * 
   *
   * Throws BadRequestError on duplicates.
   **/
    static async register({ username, firstName, lastName, password, email, isAdmin }) {
        const doesUserExist = await db.query(
            `SELECT username FROM users WHERE username = $1`, [username]
            );

        if(doesUserExist.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${username}`);
        };
        
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
                created_at AS "createdAt"
                `, [username, firstName, lastName, hashedPassword, email, isAdmin]
            );
            
        const user = userResult.rows[0];

        return user;
    };

    /** Get recently views news.
     * 
     * returns max amount of 5 news 
     */

    // static async getRecents(username) {
    //     let results = await db.query(`
    //         SELECT 
    //     `)
    // }

    /** Delete given user from database; returns undefined. */

    static async remove(username) {
        let result = await db.query(`
            DELETE FROM users
            WHERE username = $1
            RETURNING username
            `, [username]
        );
        const user = result.rows[0];

        if (!user) throw new NotFoundError(`No user: ${username}`);
    }
};

module.exports = User;