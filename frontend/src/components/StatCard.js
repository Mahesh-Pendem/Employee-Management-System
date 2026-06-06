import React from "react";

const StatCard = ({ title, value, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <h6>{title}</h6>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
