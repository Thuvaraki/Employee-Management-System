import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeService {
  getEmployee() {
    return axios.get(`${BASE_URL}employees`);
  }

  addEmployee(newEmployee) {
    return axios.post(`${BASE_URL}addEmployee`, newEmployee);
  }
}

export default new EmployeeService();
