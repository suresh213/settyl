import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GET_EMPLOYEES } from "../../actions/types";
import EmployeeService from "../../services/EmployeeService";
import Employees from "../Employees/Employees";
import DepartmentChart from "../Charts/DepartmentChart";
import StatusChart from "../Charts/StatusChart";
import Charts from "../Charts/Charts";

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.EmployeeReducers.employees);

  const tabComponents = [
    {
      name: "Dashboard",
      component: <Charts employees={employees} />,
    },
    {
      name: "Employees",
      component: <Employees employees={employees} />,
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await EmployeeService.getEmployees();
        dispatch({
          type: GET_EMPLOYEES,
          payload: res.data.data,
        });
      } catch (err) {
        toast.error(err);
      }
    })();
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="wrapped label tabs example"
          >
            {tabComponents.map((tab, index) => (
              <Tab value={index} label={tab.name} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <Box>{tabComponents[value].component}</Box>
    </>
  );
};

export default Dashboard;
