import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { employeeTemplate } from "../../constants";
import Maps from "../Maps/Maps";

const EmployeeDetailsDialog = ({ employee, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Employee details</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            minWidth: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {employeeTemplate.map((field) => (
            <Typography sx={{ mt: 1 }}>
              {field.label} : {employee[field.attribute]}
            </Typography>
          ))}
          <Typography sx={{ mt: 1 }}>Location:</Typography>
          <Box sx={{ width: "40vw", height: "40vh" }}>
            <Maps address={employee.address} />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetailsDialog;
