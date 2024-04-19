'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Service, {
        foreignKey: "service_id",
      });
      CartItem.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  CartItem.init({
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};