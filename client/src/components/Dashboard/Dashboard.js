import React, { useEffect, useState } from "react";
import { initialEmployeeDetails } from "../../constants";
import EmployeeService from "../../services/EmployeeService";
import { CreateEmployee } from "./CreateEmployee";
import { useDispatch } from "react-redux";
import { GET_EMPLOYEES } from "../../actions/types";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = useState(initialEmployeeDetails);

  useEffect(() => {
    (async () => {
      const res = await EmployeeService.getEmployees();
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data,
      });
    })();
  }, []);

  return (
    <div>
      <CreateEmployee employee={newEmployee} setEmployee={setNewEmployee} />
    </div>
  );
};

export default Dashboard;
