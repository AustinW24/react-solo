const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Song } = require('../../db/models');


router.get('/home', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    res.json(songs);
}));


// router.get('/', asyncHandler(async function (req, res) {
//     const songs = await Song.findAll();
//     res.json(songs);
// }));


// router.get('/:id/delete', asyncHandler(async function (req, res) {
//     const id = req.params.id;
//     const songId = Number(id);
//     const song = await Song.findById(songId);
//     return res.json(song)

// }));

router.post(
    '/upload', asyncHandler(async function (req, res, next) {

        const song = await Song.create(req.body)
        res.json(song);
    })
);


router.put('/:id', asyncHandler(async function (req, res) {
    const songId = parseInt(req.params.id, 10)
    const singleSong = await Song.findByPk(songId)
    const updatedSong = await singleSong.update(req.body)
    return res.json(updatedSong);
}));

router.delete('/home', asyncHandler(async function (req, res) {
    console.log(req.params.id)
    const songId = parseInt(req.body.id)
    const song = await Song.findByPk(songId);
    const deletedSong = await song.destroy();
    return res.json(deletedSong)
}));

router.post('/:id/edit', asyncHandler(async function (req, res) {
    const songs = await Song.findAll();
    res.json(songs);
}));



    module.exports = router;
