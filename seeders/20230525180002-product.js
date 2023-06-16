'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        productName: 'nfs',
        categoryId: 2,
        description: 'desc',
        price: 50,
        image: 'img',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'coll of duty',
        categoryId: 1,
        description: 'desc',
        price: 40,
        image: 'img2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});

  }
};

