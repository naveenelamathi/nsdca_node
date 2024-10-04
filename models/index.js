const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres', // or your database dialect
});

// Import models
const Signup = require('./Signup.model')(sequelize);

// Export models
module.exports = {
  sequelize,
  Signup, // Ensure you are exporting 'Signup'
};
