const EmployeeService = require("../services/EmployeeService");
const Util = require("../../utils");
const util = new Util();

class EmployeeController {
  static async getAllEmployees(req, res) {
    const employees = await EmployeeService.getAllEmployees();
    util.setSuccess(200, "Employees retrieved", employees);
    return util.send(res);
  }

  static async addEmployee(req, res) {
    const requiredAttributes = [
      "name",
      "age",
      "department",
      "address",
      "status",
    ];

    requiredAttributes.forEach((attribute) => {
      if (!req.body.hasOwnProperty(attribute)) {
        util.setError(400, `Please input a valid ${attribute}`);
        return util.send(res);
      }
    });

    try {
      const employee = await EmployeeService.addEmployee(req.body);
      util.setSuccess(200, "Employee created", employee);
      return util.send(res);
    } catch (err) {
      util.setError(500, "Error in adding employee", err);
      return util.send(res);
    }
  }

  static async updateEmployee(req, res) {
    const { id } = req.params;
    const alteredEmployee = req.body;

    if (!id) {
      util.setError(400, "Please input a valid employee id");
      return util.send(res);
    }

    try {
      const updatedEmployee = await EmployeeService.updateEmployee(
        { _id: id },
        alteredEmployee
      );
      util.setSuccess(200, "Employee updated", updatedEmployee);
      return util.send(res);
    } catch (err) {
      util.setError(500, "Error in updating employee", err);
      return util.send(res);
    }
  }

  static async deleteEmployee(req, res) {
    const { id } = req.params;
    const alteredEmployee = req.body;

    if (!id) {
      util.setError(400, "Please input a valid employee id");
      return util.send(res);
    }

    try {
      const deletedEmployee = await EmployeeService.deleteEmployee({ _id: id });
      util.setSuccess(200, "Employee deleted", deletedEmployee);
      return util.send(res);
    } catch (err) {
      util.setError(500, "Error in deleting employee", err);
      return util.send(res);
    }
  }
}

module.exports = EmployeeController;
