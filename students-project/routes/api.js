const express = require('express');
const router = express.Router();
const Students = require('../models/Students');

// api index
router.get('/', (req, res) => {
  res.send('API HOME PAGE! Check /api/.. routes');
});

// GET - all students
router.get('/students/all', async (req, res) => {
  // if(req.query.grade) {
  //   // send only passed students
  // } else {
  //   // send all students
  // }
  try {
    const allStudents = await Students.find({});
    res.json(allStudents);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

// POST - a student
router.post('/students', async (req, res) => {
  // const firstName = req.body.firstName ;
  // const lastName = req.body.lastName;
  // const bio = req.body.bio;
  // const imageUrl = req.body.imageUrl;
  // const grade = req.body.grade;
  try {
    const postedStudent = await Students.create(req.body);
    res.json({
      message: 'Successfully posted a Student',
      data: postedStudent,
    });
  } catch (err) {
    res.send(err.message);
    console.log(err);
    throw err;
  }
});

// DELETE - a student
router.delete('/students', async (req, res) => {
  const _id = req.query.id;
  // const _id = req.params.id;

  try {
    const deletedStudent = await Students.findByIdAndDelete(_id);
    res.json({
      message: 'Successfully deleted a Student',
      data: deletedStudent,
    });
  } catch (err) {
    res.send(err.message);
    console.log(err);
    throw err;
  }
});

// UPDATE - a student
router.put('/students', async (req, res) => {
  const { id } = req.query;
  const { firstName, lastName, email, bio } = req.query;

  try {
    const updatedStudent = await Students.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      bio,
    });
    res.json({
      message: 'Successfully updated a Student',
      data: updatedStudent,
    });
  } catch (err) {
    res.send(err.message);
    console.log(err);
    throw err;
  }
});

// fetch.put(`htps:::?id=${idValue}&firstName=${firstNameValue}`)
// GET - passed students
// passed students grades > 60
// put this logic
// send the data back

// GET - a single student
// _id, email

module.exports = router;
