const router = require('./routes.js');
const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());
// app.use('/', router);
app.use(express.static(path.join(__dirname, '../../dist')));


app.listen(process.env.PORT, () => {
  console.log(`We in this port ${process.env.PORT} !`)
});

module.exports = app;