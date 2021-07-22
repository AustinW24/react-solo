const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Album } = require('../../db/models/album');


router.delete("/delete/:id", requireAuth, asyncHandler(async function (req, res) {
    const albumId = await Album.remove(req.params.id)
    return res.json({ albumId})
}));


router.post(
    '/new', requireAuth,
    asyncHandler(async function (req, res, next) {
        const { title, userId, imageUrl } = req.body;

        const album = await db.Album.build({
            title,
            userId,
            imageUrl
        })
        await album.save();

        return res.json({album})
    })
);

router.get('/home', asyncHandler(async function (_req, res) {
    const albums = await Album.findAll();
    res.json(songs)
}));
