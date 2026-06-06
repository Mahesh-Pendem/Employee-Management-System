import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      login(data);
      toast.success("Registration successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page register-bg">
      <div className="auth-card">
        <h2 className="fw-bold mb-3">Create Account</h2>

        <form onSubmit={submitHandler}>
          <input className="form-control mb-3" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <button className="btn btn-success w-100 rounded-pill">Register</button>
        </form>

        <p className="mt-3 mb-0">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
