async function removeAlbum(albumId) {
    const album = await Album.findByPk(albumId);
    if (!album) throw new Error('Cannot find album');

    await Album.destroy({ where: { id: album.id }});
    return album.id;
  }



  module.exports = removeAlbum
