import React, { useState, useEffect } from "react";

const departments = ["HR", "Engineering", "Sales", "Marketing", "Finance", "Operations"];

const EmployeeForm = ({ onSubmit, initialData = {}, loading }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    status: "Active",
    joiningDate: "",
    ...initialData
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="glass-card p-4" onSubmit={submitHandler}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input className="form-control" name="phone" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Department</label>
          <select className="form-select" name="department" value={form.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Designation</label>
          <input className="form-control" name="designation" value={form.designation} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Salary</label>
          <input className="form-control" type="number" min="1" name="salary" value={form.salary} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select className="form-select" name="status" value={form.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Joining Date</label>
          <input className="form-control" type="date" name="joiningDate" value={form.joiningDate?.slice(0, 10) || ""} onChange={handleChange} required />
        </div>
      </div>

      <button className="btn btn-primary mt-4 px-4 rounded-pill" disabled={loading}>
        {loading ? "Saving..." : "Save Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
