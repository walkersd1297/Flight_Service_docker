'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Chattrapati Shivaji Maharaj International Airport',
        address: '',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juhu Airport',
        address: '',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shirdi International Airport',
        address: '',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aurangabad Airport',
        address: '',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jolly Grant Airport',
        address: '',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pantangar Airport',
        address: '',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
