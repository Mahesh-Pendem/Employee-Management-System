import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";
import { getEmployeeById, updateEmployee } from "../services/employeeService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (form) => {
    try {
      setLoading(true);
      await updateEmployee(id, form);
      toast.success("Employee updated successfully");
      navigate("/employees");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h2 className="fw-bold mb-4">Edit Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} initialData={employee} loading={loading} />
    </Layout>
  );
};

export default EditEmployee;
