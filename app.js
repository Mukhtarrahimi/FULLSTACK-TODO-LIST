const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
require('dotenv').config();
const connectDB = require('./server/config/db');

// public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine setup
app.use(expressLayouts);
app.set('layout', './layouts/main');

app.set('view engine', 'ejs');

connectDB();
// server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listen to port ${PORT}`);
});
