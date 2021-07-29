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
    return queryInterface.bulkInsert("Users", [
      {
        name: "Acong",
        email: "acong@gmail.com",
        password: "1234",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Juned",
        email: "juned@email.com",
        password: "1234",
        role: "owner",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Burhan",
        email: "Burhan@email.com",
        password: "Piknik72",
        role: "owner",
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
    return queryInterface.bulkDelete("Users", null, {})
  }
};
