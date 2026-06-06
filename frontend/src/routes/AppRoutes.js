import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import EmployeeList from "../pages/EmployeeList";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import EmployeeDetails from "../pages/EmployeeDetails";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/employees" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />
      <Route path="/employees/add" element={<ProtectedRoute><AddEmployee /></ProtectedRoute>} />
      <Route path="/employees/edit/:id" element={<ProtectedRoute><EditEmployee /></ProtectedRoute>} />
      <Route path="/employees/:id" element={<ProtectedRoute><EmployeeDetails /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
