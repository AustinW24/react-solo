'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};