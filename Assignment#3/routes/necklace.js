// necklace.js
const express = require('express');
const router = express.Router();
const necklace = require("../models/necklace");

router.get('/', async (req, res) => {
    let necklaces = await necklace.find();
    console.log(necklaces);
    res.render("necklace", {necklaces});
});

module.exports = router;
