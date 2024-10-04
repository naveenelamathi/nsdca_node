'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Certificate extends Model {
    static associate(models) {
      // Define associations here, if any
      // For example:
      // Certificate.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Certificate.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    serial_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aadhar_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    register_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Certificate',
    tableName: 'Certificate',
    timestamps: true, // Automatically handles createdAt and updatedAt
  });

  return Certificate;
};
