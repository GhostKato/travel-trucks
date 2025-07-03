import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";

const Layout: React.FC = () => {
  return (
    <div className={s.layout}>
      <Navigation />
      <main className={s.container}>
        {/* Тут рендеряться активні маршрути */}
        <Outlet />
      </main>
      {/* можеш додати футер тут */}
    </div>
  );
};

export default Layout;
