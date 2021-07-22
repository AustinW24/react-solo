'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Album;
};
