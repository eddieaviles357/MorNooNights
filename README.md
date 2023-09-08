# MorNooNights News App

Here is a live demo [MorNooNights News App](https://mornoonightsnews-39e07576b3dd.herokuapp.com)

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

First navigate to the backend directory and run the following

```javascript
npm i
```

Navigate to frontend directory and run the following

```javascript
npm i

```

since we are using webpack 5 we need to modify our webpack.config.js file
navigate to node_modules -> react-scripts -> config -> webpack.config.js.

enter the following

```javascript
// line 305
resolve: {
  fallback: {
    "crypto": require.resolve("crypto-browserify"),
    ...
  }
}
// line 606
plugins: [
    new webpack.DefinePlugin({
    process: JSON.stringify(process.env.NODE_ENV),
  }),
  ...
]
...
```

Clone the app and run the app. Enter the following on your terminal. Make sure you are in the right folder (backend or frontend).

```javascript
npm start
```

### Install PostgreSQL

Make sure to have [PostgreSQL](https://www.postgresql.org) installed on your machine before starting. Cd to the backend folder and run the following command on your terminal to seed the database.

```javascript
psql < mornoonights.sql;
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

# Home page

Initial page
![home](https://github.com/eddieaviles357/MorNooNights/assets/45490047/511aaf84-e8bd-4530-a192-811b2da3b783)

# Signup page

Create an account
![signup](https://github.com/eddieaviles357/MorNooNights/assets/45490047/9fc4ff27-0a2e-4873-88fe-d8c7b1e98fc9)

# Topnews page

Displays the top news of the day
![topnews](https://github.com/eddieaviles357/MorNooNights/assets/45490047/6508b54c-2f01-494f-a750-b2fbd5c16c52)

# Search news

Filter news by categories or by keywords
![search](https://github.com/eddieaviles357/MorNooNights/assets/45490047/42f0d680-f79d-449b-bfa8-dc0c9734852f)
