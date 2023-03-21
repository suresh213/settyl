import { Grid } from "@mui/material";
import React from "react";
import DepartmentChart from "./DepartmentChart";
import StatusChart from "./StatusChart";

const Charts = ({ employees }) => {
  return (
    <Grid container sx={{ p: 2 }}>
      <StatusChart employees={employees} />
      <DepartmentChart employees={employees} />
      <DepartmentChart employees={employees} />
      <DepartmentChart employees={employees} />
    </Grid>
  );
};

export default Charts;
