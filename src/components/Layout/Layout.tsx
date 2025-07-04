import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.container}>
        {/* Тут рендеряться активні маршрути */}
        <Outlet />
      </main>
      {/* можеш додати футер тут */}
    </div>
  );
};

export default Layout;
