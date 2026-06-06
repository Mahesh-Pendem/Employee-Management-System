import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar p-3">
      <h3 className="text-white fw-bold mb-4">EMS</h3>
      <ul className="nav flex-column gap-2">
        <li>
          <Link className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`} to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`sidebar-link ${location.pathname.includes("/employees") ? "active" : ""}`}
            to="/employees"
          >
            Employees
          </Link>
        </li>
        <li>
          <Link className={`sidebar-link ${location.pathname === "/employees/add" ? "active" : ""}`} to="/employees/add">
            Add Employee
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
