'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Student extends Model {
    static associate(models) {
      // Define associations here if needed
      // For example: Student.hasMany(models.Certificate, { foreignKey: 'students_register_no' });
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
      students_register_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enrollment_no: {
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
      modelName: 'Student',
      tableName: 'Student',
      timestamps: true, // Automatically handles createdAt and updatedAt
      underscored: true, // Uses snake_case for the columns in the database
    }
  );

  return Student;
};
