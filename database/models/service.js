'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.State, {
        foreignKey: "state_id",
      });
      Service.hasMany(models.CartItem, {
        foreignKey: "service_id",
      });
      Service.belongsTo(models.Category, {
        foreignKey: "category_id",
      })
    }
  }
  Service.init({
    image_url: DataTypes.TEXT,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    media: DataTypes.STRING,
    ftf: DataTypes.STRING,
    size: DataTypes.STRING,
    total_area: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};