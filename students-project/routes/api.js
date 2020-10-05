const express = require('express');
const router = express.Router();
const Student = require('../models/Students');
const { ReplSet } = require('mongodb');

// index
router.get('/', (req, res) => {
  res.send('Students API. Check out /api/... routes');
});

// GET - all students
router.get('/all', async (req, res) => {
  try {
    const allStudents = await Student.find({});
    res.json(allStudents);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

// GET - single student
router.get('/student', async (req, res) => {
  // OR we can use params instead:
  // EX: /student/:id
  // const _id = req.params.id
  const _id = req.query.id;
  try {
    const singleStudent = await Student.findById(_id).exec();
    res.json(singleStudent);
  } catch (err) {
    res.send(err.message);
    throw err;
  }
});

// POST - a student
router.post('/student', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const bio = req.body.bio;
  const imageUrl = req.body.imageUrl;
  const grade = req.body.grade;

  console.log(req.body);

  try {
    // shortcut: await Student.create(body)
    const createdUser = await Student.create({
      firstName,
      lastName,
      bio,
      imageUrl,
      grade,
    });
    if (createdUser) {
      const success = {
        message: 'Student sucessfully created!',
        data: createdUser,
      };
      res.json(success);
    }
  } catch (err) {
    res.send(err.message);
    throw err;
  }
});

// DELETE - a student
router.delete('/student', async (req, res) => {
  const _id = req.query.id;

  try {
    const deletedUser = await Student.findByIdAndDelete(_id);
    if (deletedUser) {
      const success = {
        message: 'Student sucessfully deleted!',
        data: deletedUser,
      };
      res.json(success);
    }
  } catch (err) {
    res.send(err.message);
    throw err;
  }
});

// UPDATE - a student
router.put('/student', async (req, res) => {
  const _id = req.query.id;
  const { firstName } = req.query;

  try {
    const updatedUser = await Student.findByIdAndUpdate(_id, { firstName });
    if (updatedUser) {
      const success = {
        message: 'Student sucessfully updated!',
        data: updatedUser,
      };
      res.json(success);
    }
  } catch (err) {
    res.send(err.message);
    throw err;
  }
});
module.exports = router;
