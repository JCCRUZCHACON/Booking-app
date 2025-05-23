'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.hotel)
    }
  }
  booking.init({
    checkIn: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    checkOut: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hotelId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hotel',
        key: 'id'
      }
    },
    desayuno:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};