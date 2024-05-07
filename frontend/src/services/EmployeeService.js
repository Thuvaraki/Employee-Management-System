import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeService {
  getEmployee() {
    return axios.get(`${BASE_URL}employees`);
  }

  addEmployee(newEmployee) {
    return axios.post(`${BASE_URL}addEmployee`, newEmployee);
  }

  getEmployeeById(id) {
    return axios.get(`${BASE_URL}employees/${id}`);
  }

  updateEmployee(id, updateEmployee) {
    return axios.put(`${BASE_URL}updateEmployee/${id}`, updateEmployee);
  }

  deleteEmployee(id) {
    return axios.delete(`${BASE_URL}deleteEmployee/${id}`);
  }
}

export default new EmployeeService();
