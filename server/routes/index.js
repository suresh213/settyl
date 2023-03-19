import { Router } from "express";
import EmployeeRoutes from "./EmployeeRoutes";

const router = Router();

router.use("/employee", EmployeeRoutes);

export default router;
