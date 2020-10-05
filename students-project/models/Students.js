const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema
const student = new Schema({
  firstName: { type: String, trim: true, default: '' },
  lastName: { type: String, default: '' },
  bio: { type: String, default: '' },
  imageUrl: {
    type: String,
    index: true,
    unique: true,
  },
  grade: { type: Number, default: 0 },
});

// To use our schema definition, we need to convert our student into a Model we can work with.
const Student = mongoose.model('Student', student);
module.exports = Student;
