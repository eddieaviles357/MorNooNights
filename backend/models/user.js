"use strict";

const db = require("../db");
const { BadRequestError } = require("../MornoonightsError");


class User {
    static async register({ username, first_name, last_name, password, email, is_admin}) {

        const doesUserExist = await db.query(`
        SELECT username 
        FROM users 
        WHERE username = $1`
        , [username]);

        if(doesUserExist.rows.length > 0) throw new BadRequestError(`Duplicate username: ${username}`);;

        const userResult = await db.query(`
        INSERT INTO users 
            (username, 
            first_name, 
            last_name, 
            password, 
            email, 
            is_admin)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING 
            username, 
            first_name AS "firstName", 
            last_name AS "lastName", 
            email, 
            is_admin AS "isAdmin", 
            created_at AS "createdAt"
            `, [
                username, 
                first_name, 
                last_name, 
                password, 
                email, 
                is_admin
                ]
            );
            
        const user = result.rows[0];

        return user;
    }
}

module.exports = User;