import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="topbar d-flex justify-content-between align-items-center px-4 py-3">
      <div>
        <h4 className="mb-0 text-white fw-bold">Employee Management System</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="text-white fw-semibold">{user?.name}</span>
        <button className="btn btn-light btn-sm rounded-pill px-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
