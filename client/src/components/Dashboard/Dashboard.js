import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GET_EMPLOYEES } from "../../actions/types";
import { employeeTemplate } from "../../constants";
import EmployeeService from "../../services/EmployeeService";
import { AddOrUpdateEmployee } from "./AddOrUpdateEmployee";

const Dashboard = () => {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.EmployeeReducers.employees);

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

  const deleteEmployee = async (id) => {
    try {
      await EmployeeService.deleteEmployee(id);
      dispatch({
        type: GET_EMPLOYEES,
        payload: employees.filter((e) => e._id !== id),
      });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ flexDirection: "row-reverse" }}>
          <AddOrUpdateEmployee />
        </Box>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={12}>
              {employees.map((employee) => (
                <Grid key={employee._id} item>
                  {employeeTemplate.map((field) => (
                    <Typography>
                      {field.label} : {employee[field.attribute]}
                    </Typography>
                  ))}
                  <AddOrUpdateEmployee employee={employee} isUpdate />
                  <Button onClick={() => deleteEmployee(employee._id)}>
                    Delete
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
