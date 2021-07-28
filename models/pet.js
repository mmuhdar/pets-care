'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.User, {foreignKey: "UserId"})
      Pet.belongsToMany(models.Service, {through: models.PetService})
    }
  };
  Pet.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    race: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};