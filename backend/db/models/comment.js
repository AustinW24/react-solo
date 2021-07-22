'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Comment.belongsTo(models.Album, {
      foreignKey: 'albumId'
    })
  };
  return Comment;
};
