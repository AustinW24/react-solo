'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Song, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Album, {
      foreignKey: 'userId'
    })
  };
  return User;
};
