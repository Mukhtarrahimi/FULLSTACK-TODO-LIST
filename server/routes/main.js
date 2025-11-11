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

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    await Tasks.create({ title, description });
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = await req.body.id;
    await Tasks.findByIdAndDelete({ id: _id });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
