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
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-8 ">
          <h2 className="text-center mt-4">Add New Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="firstname" className="mr-3">
                  First name:
                </label>
                <input
                  name="firstname"
                  placeholder="Enter First name"
                  value={newEmployeeFirstName}
                  onChange={(e) => setNewEmployeeFirstName(e.target.value)}
                  className="form-control mb-3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname" className="mr-3">
                  Last name:
                </label>
                <input
                  name="lastname"
                  placeholder="Enter Last name"
                  value={newEmployeeLastName}
                  onChange={(e) => setNewEmployeeLastName(e.target.value)}
                  className="form-control mb-3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="mr-3">
                  Email:
                </label>
                <input
                  name="email"
                  placeholder="Enter Email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className=" ">
                <button
                  className="btn btn-success m-4"
                  type="button"
                  onClick={handleSubmit}
                >
                  Save
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
