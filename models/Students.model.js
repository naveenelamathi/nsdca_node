'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Student extends Model {
    static associate(models) {
    
    }
  }

  Student.init(
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
    },
    {
      sequelize,
      modelName: 'Students',
      tableName: 'Students', // Make sure this matches the table name
      timestamps: true, // Automatically handles createdAt and updatedAt
      underscored: true, // Uses snake_case for the columns in the database
    }
  );

  return Student;
};
