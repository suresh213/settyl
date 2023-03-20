import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5000";
const apiPath = "/api/employee";

axios.defaults.baseURL = REACT_APP_API_URL;

export default class EmployeeService {
  static async getEmployees() {
    return await axios.get(`${apiPath}/get`);
  }

  static async addEmployee(formdata) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios.post(`${apiPath}/add`, formdata, config);
  }

  static async updateEmployee(id, formdata) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axios.put(`${apiPath}/update/${id}`, formdata, config);
  }

  static async deleteEmployee(id) {
    return await axios.delete(`${apiPath}/delete/${id}`);
  }
}
