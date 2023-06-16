'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
    {
      categoryName: 'Arcada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Action',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Battlegrounds',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Racing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Fighting',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Shooter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Footboal',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};