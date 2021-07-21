const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { requireAuth } = require('../../utils/auth');


router.delete("/delete/:id", requireAuth, asyncHandler(async function (req, res) {
    const { title, userId, imageUrl } = req.body;
    const deleted = await db.Album.destroy()
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
