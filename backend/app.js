"use strict";

const express = require('express');
const cors = require('cors');

const app = express();
const newsRoutes = require("./routes/news");

app.use(cors());
app.use(express.json());

app.use("/news", newsRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
    return next(new Error("NOT FOUND"));
  });

/** Generic error handler. Anything unhandled goes here. */
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;