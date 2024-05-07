import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = new useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await EmployeeService.getEmployee();
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/addEmployee");
  };

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <Link to="/addEmployee">
          <button className="btn btn-primary" onClick={handleAddEmployee}>
            Add Employee
          </button>
        </Link>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.firstName} </td>
                <td> {employee.lastName} </td>
                <td> {employee.emailId} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
