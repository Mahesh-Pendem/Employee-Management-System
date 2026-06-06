import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getEmployeeById } from "../services/employeeService";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return null;

  return (
    <Layout>
      <h2 className="fw-bold mb-4">Employee Details</h2>
      <div className="glass-card p-4">
        <div className="row g-3">
          <div className="col-md-6"><strong>Employee ID:</strong> {employee.employeeId}</div>
          <div className="col-md-6"><strong>Name:</strong> {employee.name}</div>
          <div className="col-md-6"><strong>Email:</strong> {employee.email}</div>
          <div className="col-md-6"><strong>Phone:</strong> {employee.phone}</div>
          <div className="col-md-6"><strong>Department:</strong> {employee.department}</div>
          <div className="col-md-6"><strong>Designation:</strong> {employee.designation}</div>
          <div className="col-md-6"><strong>Salary:</strong> Rs. {employee.salary}</div>
          <div className="col-md-6"><strong>Status:</strong> {employee.status}</div>
          <div className="col-md-6"><strong>Joining Date:</strong> {new Date(employee.joiningDate).toLocaleDateString()}</div>
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeDetails;
