const express = require('express');
const app = express();
require('dotenv').config();

// public
app.use(express.static('public'));

// ejs setup
app.use('engin ejs');
app.use('layouts main');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listen to port ${PORT}`);
});
