import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import { getStats } from "../services/employeeService";

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <Layout>
      <h2 className="fw-bold mb-4">Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <StatCard title="Total Employees" value={stats.total} color="blue-card" />
        </div>
        <div className="col-md-4">
          <StatCard title="Active Employees" value={stats.active} color="green-card" />
        </div>
        <div className="col-md-4">
          <StatCard title="Inactive Employees" value={stats.inactive} color="orange-card" />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
