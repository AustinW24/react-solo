'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    return queryInterface.bulkInsert('Songs', [{
      userId: 1,
      title: 'Peace sells but who\'s buying',
      url: 'https://ssoundsspace.s3.us-west-1.amazonaws.com/ss_album_art/220px-Megadeth-Youthanasia.jpg',
      duration: 324
    },
    {
      userId: 2,
      title: 'Waterfalls',
      url: 'https://ssoundsspace.s3.us-west-1.amazonaws.com/ss_album_art/R-247555-1542802842-1588.jpeg.jpg',
      duration: 414
    },
    {
      userId: 3,
      title: 'Come As You Are',
      url: 'https://ssoundsspace.s3.us-west-1.amazonaws.com/ss_album_art/Nevermind.jpg',
      duration: 333
    },
    {
      userId: 1,
      title: 'Up Up and Away',
      url: 'https://ssoundsspace.s3.us-west-1.amazonaws.com/ss_album_art/cudi.jpeg',
      duration: 254
    },
    {
      userId: 2,
      title: 'This Charming Man',
      url: 'https://ssoundsspace.s3.us-west-1.amazonaws.com/ss_album_art/R-3564656-1598305847-1047.jpeg.jpg',
      duration: 344
    }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Songs', null, {});

  }
};
