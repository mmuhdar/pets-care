'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pets", [
      {
        name: "Garfield",
        type: "Cat",
        weight: 4,
        race: "British Shorthair",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kuro",
        type: "Cat",
        weight: 2,
        race: "Munchkin",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hachi",
        type: "Dog",
        weight: 6,
        race: "Shiba Inu",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Youmi",
        type: "Cat",
        weight: 4,
        race: "Manx",
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chuck",
        type: "Dog",
        weight: 4,
        race: "Golden Retriever",
        UserId: 1,
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
    return queryInterface.bulkDelete("Pets", null, {})
  }
};
