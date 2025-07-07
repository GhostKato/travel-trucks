import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Header from "../Header/Header";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";

const Layout: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchTrucks());
    }, [dispatch]);
  
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
