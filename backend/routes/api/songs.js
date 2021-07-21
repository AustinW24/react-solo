const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { songs } = require('../../db/models/song');

router.get('/home', asyncHandler(async function (_req, res) {
    const songs = await db.findAll();
    res.json(songs)
}));



// router.delete("/:id", asyncHandler(async function (req, res) {

// }));


// router.post(
//     '/new',
//     asyncHandler(async function (req, res) {


//     })
// );

module.exports = router;
