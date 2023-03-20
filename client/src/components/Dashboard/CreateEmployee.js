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
import React from "react";
import { employeeStatus } from "../../constants";

const formTextFields = [
  {
    label: "Name",
    attribute: "name",
  },
  {
    label: "Age",
    attribute: "age",
  },
  {
    label: "Department",
    attribute: "department",
  },
  {
    label: "Address",
    attribute: "address",
  },
];

export const CreateEmployee = ({ employee, setEmployee, isUpdate }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormChange = (value, attribute) => {
    setEmployee({ ...employee, [attribute]: value });
  };

  const createEmployee = () => {
    console.log(employee);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"}>
        <DialogTitle>{isUpdate ? "Update" : "Create"} employee</DialogTitle>
        <DialogContent>
          {formTextFields.map((formField, index) => (
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
          ))}
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
                  control={<Radio />}
                  label={employeeStatus}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={createEmployee}>
            {isUpdate ? "Update" : "Create"}
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
