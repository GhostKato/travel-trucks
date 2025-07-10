import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import type { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import FilterModal from "../FilterModal/FilterModal";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import useIsDesktop from "../../hooks/useIsDesktop";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import NotificationModal from "../NotificationModal/NotificationModal";

const Layout: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const isOpenFilter = useSelector(selectIsModalOpen('filters'));
  const isOpenNotification = useSelector(selectIsModalOpen('notification'));
  const isDesktop = useIsDesktop();

  useEffect(() => {
      dispatch(fetchTrucks());
    }, [dispatch]);
  
  return (
    <div>
      <Header />
      <main>
      {isOpenFilter && !isDesktop && (
        <FilterModal />
        )}
        {isOpenNotification && <NotificationModal />}
        <Outlet />
      </main>
      <ScrollToTopButton/>
    </div>
  );
};

export default Layout;
