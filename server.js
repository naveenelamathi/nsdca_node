const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;
const db = require('./db');
// app.use(cors()); 
app.use(bodyParser.json()); 
const authController = require('./controllers/Signup.controller');
const verifyController = require('./controllers/Online.controller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../NSDCA/build')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'https://nsdca-front-end.onrender.com', 
}));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test database connection
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database');
});

// const sequelize = new Sequelize(process.env.DATABASE_URL,{
//   // username: config.username,
//   // password: config.password,
//   // database: config.database,
//   // host: config.host,
//   dialect: 'sqlite',
//   storage:"./database.sqlite",
//   logging:false
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  username: "postgress",
    password: "I2Iwh2Yld8a7TK83vuIGu6Y0FmP91xHu",
    database: "postgress_9d88",
    host: "dpg-csfhnuggph6c73f35rmg-a.oregon-postgres.render.com",
  dialect: 'postgress_9d88',
  logging: false,
});

sequelize
.sync()
.then(()=>{
console.log(" database created")
})
.catch((err)=>{
  console.log(err)
  })

app.get('/', (req, res) => {
  res.send('Simple API homepage');
})


app.post('/sign', authController.signUp);
app.post('/login',authController.login);
app.post('/verify',verifyController.verify);
app.post('/verification',verifyController.verification);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../NSDCA/build', 'index.html'), (err) => {
//     if (err) {
//       res.status(err.status).end();
//     }
//   });
// })
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// const PORT = process.env.PORT || 3000;
// const BASE_URL = `https://nsdca-front-end.onrender.com`;
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}. Access it at ${BASE_URL}`);
// });
