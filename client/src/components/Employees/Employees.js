import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { GET_EMPLOYEES } from "../../actions/types";
import { employeeTemplate, initialEmployeeDetails } from "../../constants";
import EmployeeService from "../../services/EmployeeService";
import { AddOrUpdateEmployee } from "./AddOrUpdateEmployee";
import EmployeeDetailsDialog from "./EmployeeDetailsDialog";

const Employees = ({ employees }) => {
  const dispatch = useDispatch();
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false);

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
        payload: employees?.filter((e) => e._id !== id),
      });
      toast.success("Employee deleted");
    } catch (err) {
      toast.error(err);
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleEmployeeDialog = () => {
    setShowEmployeeDialog(!showEmployeeDialog);
  };

  const showEmployee = (employee) => {
    setSelectedEmployee(employee);
    handleEmployeeDialog();
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <AddOrUpdateEmployee employee={initialEmployeeDetails} />
        </Box>
        <Grid
          sx={{ mt: 3 }}
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowSpacing={6}
            >
              {employees?.map((employee, index) => (
                <Grid sx={{ minWidth: "25%" }} key={index} item>
                  <Item>
                    {employeeTemplate.map((field) => (
                      <Typography sx={{ mt: 1 }}>
                        {field.label} : {employee[field.attribute]}
                      </Typography>
                    ))}
                    <Divider sx={{ mt: 1 }} />
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        justifyContent: "center",
                        gridColumnGap: "20px",
                      }}
                    >
                      <Button
                        size="small"
                        onClick={(e) => {
                          showEmployee(employee);
                        }}
                      >
                        Show
                      </Button>
                      <AddOrUpdateEmployee
                        employee={employee}
                        isUpdate
                        size="small"
                      />
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => deleteEmployee(employee._id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <EmployeeDetailsDialog
        open={showEmployeeDialog}
        handleClose={handleEmployeeDialog}
        employee={selectedEmployee}
      />
    </>
  );
};

export default Employees;
