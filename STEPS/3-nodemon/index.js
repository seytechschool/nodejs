const express = require('express');
const index = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connext to Mongoose
mongoose.connect('mongodb://localhost/employees',
  { useNewUrlParser: true, useUnifiedTopology: true  } );
const db = mongoose.connection;

index.get('/', (req, res) => {
    res.send('Hello World with nodemon');
});

index.listen(3000);
console.log('Running on port 3000...');
