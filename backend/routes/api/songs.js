const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Song } = require('../../db/models/song');
 const listSongs = require( './songRepository');


router.get('/home', asyncHandler(async function (req, res) {
    console.log('HELLOOOOO')
    const allSongs =  await Songs.findAll();
    console.log(allSongs)
    return res.json(allSongs)
}));


router.delete(`delete/:id`, asyncHandler(async function (req, res) {
    const songId = await songRepository.removeSong(req.params.id);
    return res.json({ songId });
}));


router.post(
    '/home', requireAuth,
    asyncHandler(async function (req, res, next) {
        const { title, userId, url, duration } = req.body;

        const song = await db.Song.build({
            userId,
            title,
            albumId,
            url,
            duration
        })
        await song.save();

        return res.json({song})
    })
);

module.exports = router;