const router = require("express").Router();
const EmployeeRoutes = require("./EmployeeRoutes");

router.use("/employee", EmployeeRoutes);

module.exports = router;
