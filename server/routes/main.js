const express = require('express');
const router = express.Router();
const Tasks = require('../model/Todo');

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find().sort({ created_at: -1 });
    res.render('index', { title: 'Todo List', tasks });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
