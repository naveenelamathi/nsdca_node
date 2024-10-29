const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // Set to true if you have valid SSL certificates
//     },
//   },
// })
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




console.log('Connecting to database with URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: 'dpg-csfhnuggph6c73f35rmg-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This is for enforcing SSL
      rejectUnauthorized: false, // Change to true if you want to enforce certificate verification
    },
  },
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    if (error.name === 'SequelizeConnectionRefusedError') {
      console.error('Unable to connect to the database: Connection refused.');
    } else {
      console.error('Unable to connect to the database:', error);
    }
  }
}

// Call the function to connect
connectToDatabase();


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
