
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');  // Assuming your JSON config is in a file named 'config.json'

// Determine the environment (development, production, or test)
const env = process.env.NODE_ENV || 'development';  // Default to 'development' if no environment is specified
const envConfig = config[env];

// Create a new Sequelize instance based on the environment
const sequelize = new Sequelize(
  envConfig.database,    // Database name
  envConfig.username,    // Database username
  envConfig.password,    // Database password
  {
    host: envConfig.host,        // Database host
    dialect: envConfig.dialect,  // Dialect (postgres or mysql)
    logging: false,              // Turn off logging (optional)
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log(`Connection to the ${env} database successful.`);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
