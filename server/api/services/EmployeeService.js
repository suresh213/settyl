const Employee = require("../../db/models/Employee");

class EmployeeService {
  static async getAllEmployees() {
    try {
      return await Employee.find();
    } catch (error) {
      throw error;
    }
  }

  static async getAnEmployee(filter) {
    try {
      return await Employee.findOne(filter);
    } catch (error) {
      throw error;
    }
  }

  static async addEmployee(newEmployee) {
    try {
      return await new Employee(newEmployee).save();
    } catch (error) {
      throw error;
    }
  }

  static async updateEmployee(filter, updatedEmployee) {
    try {
      return await Employee.findOneAndUpdate(filter, updatedEmployee, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteEmployee(filter) {
    try {
      return await Employee.findOneAndDelete(filter);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployeeService;
