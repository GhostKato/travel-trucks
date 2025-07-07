import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Header from "../Header/Header";
import type { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import FilterModal from "../FilterModal/FilterModal";
import { selectIsModalOpen } from "../../redux/modal/selectors";

const Layout: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen('filters'));

  useEffect(() => {
      dispatch(fetchTrucks());
    }, [dispatch]);
  
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.container}>
      {isOpen && (
        <FilterModal />
      )}
        <Outlet />
      </main>      
    </div>
  );
};

export default Layout;
