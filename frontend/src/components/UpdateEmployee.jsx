import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  //   console.log(id);
  const [existingEmployee, setExistingEmployee] = useState({});
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        // console.log(existingEmployee);
        setExistingEmployee(response.data);
        setEditFirstName(response.data.firstName || "");
        setEditLastName(response.data.lastName || "");
        setEditEmail(response.data.emailId || "");
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedEmployee = {
        firstName: editFirstName,
        lastName: editLastName,
        emailId: editEmail,
      };
      //   console.log(updatedEmployee);
      await EmployeeService.updateEmployee(id, updatedEmployee);
      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
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
                  value={editFirstName}
                  onChange={(e) => setEditFirstName(e.target.value)}
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
                  value={editLastName}
                  onChange={(e) => setEditLastName(e.target.value)}
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
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className=" ">
                <button
                  className="btn btn-success m-4"
                  type="button"
                  onClick={handleUpdate}
                >
                  Update
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

export default UpdateEmployee;
