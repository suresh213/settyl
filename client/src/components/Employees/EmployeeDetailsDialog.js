import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { employeeTemplate } from "../../constants";

const EmployeeDetailsDialog = ({ employee, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"sm"}>
      <DialogTitle>Employee details</DialogTitle>
      <DialogContent>
        {employeeTemplate.map((field) => (
          <Typography sx={{ mt: 1 }}>
            {field.label} : {employee[field.attribute]}
          </Typography>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetailsDialog;
