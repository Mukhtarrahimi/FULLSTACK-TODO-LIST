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

router.get('/edit/:id', async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.render('edit', { title: 'Edid Task', task });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
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
    const id = req.params.id;
    await Tasks.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    await Tasks.findByIdAndUpdate(req.params.id, {
      title,
      description,
    });
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id/done', async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    task.is_done = !task.is_done;
    await task.save();

    res.status(200).send('Task updated');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
