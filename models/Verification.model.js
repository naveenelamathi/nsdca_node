'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Verification extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Verification.init(
    {
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
      created_at: { // Use snake_case
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: { // Use snake_case
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Verification',
      tableName: 'verification', // Use the same name as in the migration
      timestamps: true, // Enables Sequelize to automatically handle createdAt and updatedAt
      underscored: true, // Ensures that Sequelize uses snake_case for columns
    }
  );

  return Verification;
};
