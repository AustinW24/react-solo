'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Song;
};
