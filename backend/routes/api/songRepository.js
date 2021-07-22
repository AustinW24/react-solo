import { Songs } from '../models/song'

  async function removeSong(songId) {
    const song = await Item.findByPk(itemId);
    if (!song) throw new Error('Cannot find song');

    await Song.destroy({ where: { id: song.id }});
    return song.id;
  }

  async function listSongs() {
    const allSongs =  await Songs.findAll();
    return res.json(allSongs)
  }


  module.exports = {
      removeSong,
      listSongs
    }
