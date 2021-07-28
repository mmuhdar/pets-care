'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("Services", [
      {
        name: "Grooming",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vaccination",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pets Mating",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pet Hotel",
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Services", null, {})
  }
};
