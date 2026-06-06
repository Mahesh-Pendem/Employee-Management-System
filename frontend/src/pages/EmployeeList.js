import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({ search: "", status: "", department: "" });

  const fetchEmployees = async () => {
    const data = await getEmployees(filters);
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, [filters]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee(id);
      toast.success("Employee deleted");
      fetchEmployees();
    }
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h2 className="fw-bold mb-0">Employees</h2>
        <Link to="/employees/add" className="btn btn-primary rounded-pill px-4">Add Employee</Link>
      </div>

      <div className="glass-card p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Search by name, email, department"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Filter by department"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="table-responsive glass-card p-3">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.employeeId}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>
                    <span className={`badge ${emp.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="d-flex gap-2 flex-wrap">
                    <Link to={`/employees/${emp._id}`} className="btn btn-info btn-sm">View</Link>
                    <Link to={`/employees/edit/${emp._id}`} className="btn btn-warning btn-sm">Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default EmployeeList;
