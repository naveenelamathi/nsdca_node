const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json')[process.env.DATABASE_URL || 'development'];

const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
// db.Property = require('./models/property')(sequelize, DataTypes);

module.exports = db;
