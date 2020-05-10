const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
Employees = require('./models/employee.js');
// Connext to Mongoose
mongoose.connect('mongodb://localhost/employees',
  { useNewUrlParser: true, useUnifiedTopology: true  } );
const db = mongoose.connection;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World with nodemon');
});

app.get('/api/employees', (req, res) => {
    Employees.getEmployees((err, employees) => {
        if (err) {
            throw err;
        }
        res.json(employees);
    })
});

app.get('/api/employee/:id', (req, res) => {
    Employees.getEmployeeById(req.params.id,(err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
});

app.post('/api/employees', (req, res) => {
    const employee = req.body;
    Employees.createEmployee(employee,(err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
});

app.put('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    const employee = req.body;
    console.log(employee)
    console.log(id)
    Employees.updateEmployee(id, employee, {}, (err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
})
app.listen(3000);

console.log('Running on port 3000...');
