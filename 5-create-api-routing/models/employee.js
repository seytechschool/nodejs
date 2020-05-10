const mongoose = require('mongoose');
// create a schema for employee
const employeeSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Employee = module.exports = mongoose.model('Employees', employeeSchema);
// get all employees
module.exports.getEmployees = (callback, limit) => {
  Employees.find(callback).limit(limit);
};
// get one employee
module.exports.getEmployeeById = (employeeId, callback) => {
  Employees.findById(employeeId, callback);
};
// create employee
module.exports.createEmployee = (employee, callback) => {
  Employees.create(employee, callback);
};
// update employee
module.exports.updateEmployee = (id, employee, options, callback) => {
  const query = {_id: id};
  Employees.findOneAndUpdate(query, employee, options, callback);
};
