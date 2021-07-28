"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PetServices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ServiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pets",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      PetId: {
        type: Sequelize.INTEGER,
        reference: {
          model: "Services",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PetServices");
  },
};
