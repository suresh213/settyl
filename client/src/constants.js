export const initialEmployeeDetails = {
  name: null,
  age: null,
  department: null,
  address: null,
  status: null,
};

export const employeeStatus = [
  "Remote Location",
  "Contract Employee",
  "Full-Time",
];

export const employeeTemplate = [
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
  {
    label: "Status",
    attribute: "status",
    show: false,
  },
];

export const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
