import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GET_EMPLOYEES } from "../../actions/types";
import {
  employeeStatus,
  employeeTemplate,
  initialEmployeeDetails,
} from "../../constants";
import EmployeeService from "../../services/EmployeeService";

export const AddOrUpdateEmployee = ({
  employee: employeeProps,
  isUpdate,
  size,
}) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [employee, setEmployee] = useState(initialEmployeeDetails);

  const employees = useSelector((state) => state.EmployeeReducers.employees);

  useEffect(() => {
    if (employeeProps) {
      setEmployee(employeeProps);
    }
  }, [employeeProps]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormChange = (value, attribute) => {
    setEmployee({ ...employee, [attribute]: value });
  };

  const createEmployee = async () => {
    try {
      const res = await EmployeeService.addEmployee(employee);
      dispatch({
        type: GET_EMPLOYEES,
        payload: [res.data.data, ...employees],
      });
      setOpen(false);
    } catch (err) {
      toast.error(err);
    }
  };

  const updateEmployee = async () => {
    try {
      const res = await EmployeeService.updateEmployee(employee._id, employee);
      dispatch({
        type: GET_EMPLOYEES,
        payload: employees.map((e) => {
          if (e._id === employee._id) {
            return res.data.data;
          }
          return e;
        }),
      });
      setOpen(false);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={(e) => {
          handleClickOpen();
          // e.nativeEvent.stopImmediatePropagation();
        }}
        size={size}
      >
        {isUpdate ? "Update" : "Create"}
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"}>
        <DialogTitle>{isUpdate ? "Update" : "Create"} employee</DialogTitle>
        <DialogContent>
          {employeeTemplate.map(
            (formField, index) =>
              formField.show !== false && (
                <FormControl key={index} sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="component-outlined">
                    {formField.label}
                  </InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label={formField.label}
                    value={employee[formField.attribute] || ""}
                    onChange={(event) =>
                      handleFormChange(event.target.value, formField.attribute)
                    }
                    required
                  />
                </FormControl>
              )
          )}
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={employee.status || ""}
              onChange={(event) =>
                handleFormChange(event.target.value, "status")
              }
              required
            >
              {employeeStatus.map((employeeStatus) => (
                <FormControlLabel
                  value={employeeStatus}
                  checked={employee.status === employeeStatus}
                  control={
                    <Radio checked={employee.status === employeeStatus} />
                  }
                  label={employeeStatus}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              isUpdate ? updateEmployee() : createEmployee();
            }}
          >
            {isUpdate ? "Update" : "Create"}
          </Button>
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
