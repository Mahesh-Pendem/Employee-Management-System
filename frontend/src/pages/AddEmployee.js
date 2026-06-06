import React, { useState } from "react";
import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      setLoading(true);
      await createEmployee(form);
      toast.success("Employee created successfully");
      navigate("/employees");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h2 className="fw-bold mb-4">Add Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} loading={loading} />
    </Layout>
  );
};

export default AddEmployee;
