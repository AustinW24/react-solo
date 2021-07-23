const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Song } = require('../../db/models');


router.get('/home', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    console.log('songsssss', songs)
    res.json(songs);
}));

router.get('/upload', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    console.log('songsssss', songs)
    res.json(songs);
}));

router.post(
    '/upload', requireAuth,
    asyncHandler(async function (req, res, next) {
        const { title, userId, url, duration } = req.body;

        const song = await db.Song.build({
            userId,
            title,
            url,
            duration
        })
        await song.save();

        return res.json({song})
    })
);

router.put('/:id/edit', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    console.log('songsssss', songs)
    res.json(songs);
}));


router.post('/:id/edit', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    console.log('songsssss', songs)
    res.json(songs);
}));


router.delete(`/:id/edit`, asyncHandler(async function (req, res) {
    const songId = await Song.findOne({where: {}});
    return res.json({ songId });
}));


router.post(
    '/home', requireAuth,
    asyncHandler(async function (req, res, next) {
        const { title, userId, url, duration } = req.body;

        const song = await db.Song.build({
            userId,
            title,
            url,
            duration
        })
        await song.save();

        return res.json({song})
    })
);

module.exports = router;
