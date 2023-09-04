# MorNooNights News App

## News Articles App.

MorNooNights App displays News from the world or local to you with filtering options.
Users must sign up in order to view news articles and recently viewed articles.
The API used for this project is [TheNewsAPI](https://www.thenewsapi.com)

### The following are required:

- NodeJS v20.2+
- ExpressJS v4.18+
- PostgreSQL v15+
- PG v8.11+
- ReactJS v18.2+
- React Router v6.14.1+

### Running the app

Clone the app and run the app. Enter the following on your terminal. Make sure you are in the right folder (backend or frontend).

```javascript
npm start
```

### Running test

Make sure to install jest

```javascript
npm i jest
// or globally
npm install jest --global
```

and run the following command

```javascript
jest
// or run individual file
jest <filename>.test.js
```

## PostgreSQL Database Schema

The database schema is very simple.
Users and recent, that's it.
We will be using [TheNewsAPI](https://www.thenewsapi.com) for fetching our news data.

![mnn_db_schema](https://github.com/eddieaviles357/MorNooNights/assets/45490047/a6a1b7cb-9cec-4d3d-940d-6f9d2cf084b0)
