const router = require("express").Router();
const EmployeeController = require("../api/controllers/EmployeeController");

router.get("/get", EmployeeController.getAllEmployees);
router.post("/add", EmployeeController.addEmployee);
router.put("/update/:id", EmployeeController.updateEmployee);
router.delete("/delete/:id", EmployeeController.deleteEmployee);

module.exports = router;
