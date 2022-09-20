const mongoose = require('mongoose');
require('dotenv').config();

PASSWORD = process.env.DBPASS;
USERNAME = process.env.USERNAME;
const mongooseURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.xvzq7cx.mongodb.net/?retryWrites=true&w=majority`;

const db = mongoose.connect(mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true });

db.then(db => console.log(`Connected to: ${mongooseURL}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongooseURL}`);
    console.log(err);
  });

module.exports = db;