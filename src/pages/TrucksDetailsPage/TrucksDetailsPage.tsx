import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const TrucksDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Truck Details (ID: {id})</h1>

      <nav style={{ marginBottom: "10px" }}>
        <NavLink
          to="features"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: "none",
            color: isActive ? "#007bff" : "#000",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Features
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#007bff" : "#000",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Reviews
        </NavLink>
      </nav>

      <hr />
      {/* Тут будуть рендеритись вкладені компоненти: TrucksFeatures або TrucksReviews */}
      <Outlet />
    </div>
  );
};
