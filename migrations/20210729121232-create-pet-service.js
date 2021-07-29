'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PetServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pets",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      ServiceId: {
        type: Sequelize.INTEGER,
        references: {
          model:"Services",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "On Progress"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PetServices');
  }
};