CREATE TABLE users (
    username VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL CHECK (first_name = LOWER(first_name)),
    last_name VARCHAR(25) NOT NULL CHECK (last_name = LOWER(last_name)),
    password TEXT NOT NULL,
    email TEXT NOT NULL CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE recents (
    news_id TEXT NOT NULL,
    username VARCHAR(30) REFERENCES users ON DELETE CASCADE,
    visited_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (news_id, username)
);

CREATE TABLE favorites (
    news_id TEXT NOT NULL,
    username VARCHAR(30) REFERENCES users ON DELETE CASCADE,
    favorited_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (news_id, username)
);