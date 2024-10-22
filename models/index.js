const { Sequelize } = require('sequelize');
const CertificateModel = require('./Certificate.model');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres', // or your database dialect
});

// Import models
const Signup = require('./Signup.model')(sequelize);
const Certificate = require('./Certificate.model')(sequelize);
const verification= require('./Verification.model')(sequelize);

// Export models
module.exports = {
  sequelize,
  Signup,
  Certificate, // Ensure you are exporting 'Signup'
  verification
};
