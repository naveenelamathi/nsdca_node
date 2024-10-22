

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      serial_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aadhar_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      register_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  },
};
