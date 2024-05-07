import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = new useState([]);

  useEffect(() => {
    EmployeeService.getEmployee().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
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
