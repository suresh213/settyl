import { Grid } from "@mui/material";
import React from "react";
import DepartmentChart from "./DepartmentBarChart";
import DepartmentPieChart from "./DepartmentPieChart";
import StatusBarChart from "./StatusBarChart";
import StatusPieChart from "./StatusPieChart";

const Charts = ({ employees }) => {
  return (
    <Grid container sx={{ p: 2 }}>
      <StatusBarChart employees={employees} />
      <DepartmentChart employees={employees} />
      <StatusPieChart employees={employees} />
      <DepartmentPieChart employees={employees} />
    </Grid>
  );
};

export default Charts;
