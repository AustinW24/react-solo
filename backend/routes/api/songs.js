const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Song } = require('../../db/models');


router.get('/home', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    res.json(songs);
}));

// router.get('/upload', asyncHandler(async function (req, res) {
//     const songs = await Song.findAll();

//     res.json(songs);
// }));

router.get('/', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    res.json(songs);
}));

// router.get('/upload', asyncHandler(async function (req, res) {
//     const songs = await Song.findAll();

//     res.json(songs);
// }));

router.get('/:id/delete', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const songId = Number(id);
    const song = await Song.findById(songId);
    return res.json(songId)

}));

router.post('/:id/delete', asyncHandler(async function (req, res) {
    console.log('HITTING')
    const id = req.params.id;
    const songId = Number(id);
    const song = await Song.findByPk(songId);
    await song.destroy();
    return res.json({song})
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
        return res.json({ song })
    })
);

router.put('/:id', asyncHandler(async function (req, res) {
    const songId = parseInt(req.params.id, 10)
    const singleSong = await Song.findByPk(songId)
    const updatedSong = await singleSong.update(req.body)
    return res.json(updatedSong);
}));


router.post('/:id/edit', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    console.log('songsssss', songs)
    res.json(songs);
}));



router.post(
    '/home', requireAuth,
    asyncHandler(async function (req, res, next) {
        const { title, userId } = req.body;

        const song = await db.Song.build({
            userId,
            title,
            url,
            duration
        })
        await song.save();

        return res.json({ song })
    })
);

module.exports = router;
