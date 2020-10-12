const mongoose = require('mongoose');

// Create a Schema
const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  lastName: {
    type: String,
    required: true,
    default: '',
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  grade: {
    type: Number,
    default: 0,
  },
});

// Create a Model

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;
