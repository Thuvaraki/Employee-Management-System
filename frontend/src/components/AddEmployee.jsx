import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [newEmployeeFirstName, setNewEmployeeFirstName] = useState("");
  const [newEmployeeLastName, setNewEmployeeLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName: newEmployeeFirstName,
      lastName: newEmployeeLastName,
      emailId: newEmail,
    };

    console.log(newEmployee);

    try {
      await EmployeeService.addEmployee(newEmployee);
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error.message);
      alert("Failed to add employee. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add New Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstname">First name: </label>
                  <input
                    name="firstname"
                    placeholder="Enter First name"
                    value={newEmployeeFirstName}
                    onChange={(e) => setNewEmployeeFirstName(e.target.value)}
                    className="form-control"
                  />

                  <label htmlFor="lastname">Last name: </label>
                  <input
                    name="lastname"
                    placeholder="Enter Last name"
                    value={newEmployeeLastName}
                    onChange={(e) => setNewEmployeeLastName(e.target.value)}
                    className="form-control"
                  />

                  <label htmlFor="email">Email : </label>
                  <input
                    name="email"
                    placeholder="Enter Email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="form-control"
                  />

                  <button className="btn btn-success" onClick={handleSubmit}>
                    Submit
                  </button>

                  <button className="btn btn-danger" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
