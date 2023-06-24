"use strict";

const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res, next) => {
    try {
        return res.json({ success: 'success'})
    } catch (err) {
        return next(err);
    }
});

module.exports = router;