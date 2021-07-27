const bcrypt = require('bcryptjs');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        {
          username: 'rinTinTin',
          location: 'Miami, Fl',
          email: 'cereal99@yahoo.com',
          hashedPassword: bcrypt.hashSync("password1")
        },
        {
        username: 'Ausmister',
        location: 'Dallas, Texas',
        email: 'yogurt100@hotmail.com',
        hashedPassword: bcrypt.hashSync("password2")
      },
      {
      username: 'MangoMan',
      location: 'Miami, Fl',
      email: 'biscuits21@gmail.com',
      hashedPassword: bcrypt.hashSync("password3")
    },

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
