import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployee() {
    return axios.get(BASE_URL);
  }
}

export default new EmployeeService();
