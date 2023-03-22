import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { groupBy } from "../../constants";

const DepartmentChart = ({ employees }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const groupedData = groupBy(employees, "department");
    const data =
      Object.keys(groupedData)?.map((department) => {
        return {
          name: department,
          count: groupedData[department]?.length || 0,
        };
      }) || [];
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
        width={500}
        height={300}
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
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DepartmentChart;
