import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { employeeStatus } from "../../constants";

const StatusBarChart = ({ employees }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = employeeStatus.map((status) => {
      return {
        name: status,
        count:
          employees?.filter((employee) => employee.status === status)?.length ||
          0,
      };
    });
    setData(data);
  }, [employees]);

  return (
    <ResponsiveContainer
      width="48%"
      aspect={2.6}
      sx={{
        boxShadow: 12,
        margin: 2,
        padding: 2,
        border: "1px solid black",
      }}
    >
      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatusBarChart;
