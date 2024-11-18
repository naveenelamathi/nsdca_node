const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect,
});

const db = {};

// Import models manually
// db.Property = require('./models/property')(sequelize, DataTypes);
// db.User = require('./models/user')(sequelize, DataTypes);  // Example of another model

// Add other models as needed
// db.OtherModel = require('./models/otherModel')(sequelize, DataTypes);

// Export db object with models
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;