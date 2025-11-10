const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.render('index', { title: 'Todo List' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
