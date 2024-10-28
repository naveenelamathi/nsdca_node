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




const sequelize = new Sequelize(process.env.DATABASE_URL, {

  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    connectTimeout: 30000, // Set timeout to 30 seconds
  },
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
