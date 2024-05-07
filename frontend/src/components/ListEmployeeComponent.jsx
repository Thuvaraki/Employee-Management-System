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

  const handleUpdate = (id) => {
    navigate(`/updateEmployee/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    EmployeeService.deleteEmployee(id);
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2 className="text-center m-4">Employee List</h2>
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
                <td>
                  <button
                    className="btn btn-info m-3"
                    type="button"
                    onClick={() => handleUpdate(employee.id)} //must use arrow functions (() =>), so that handleUpdate and handleDelete functions are called only when the button is clicked.
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger m-3"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/addEmployee">
          <button className="btn btn-primary m-4" onClick={handleAddEmployee}>
            Add Employee
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
