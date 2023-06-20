CREATE TABLE users (
    username VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL CHECK (position('@' IN email) > 1)
);

CREATE TABLE recents (

);