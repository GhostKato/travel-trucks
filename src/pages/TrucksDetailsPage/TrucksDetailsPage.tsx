import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchTruckDetails } from "../../redux/trucks/operations";
import clsx from "clsx";
import s from './TrucksDetailsPage.module.css';
import { selectSelectedTruck } from "../../redux/trucks/selectors";

interface BuildLinkClassParams {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: BuildLinkClassParams): string => {
  return clsx(s.link, isActive && s.active);
};

export const TrucksDetailsPage: React.FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const truck = useSelector(selectSelectedTruck);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [dispatch, id]);

  return (
    <div className={s.container}>
      <h1 className={s.name}>{truck?.name}</h1>

      <ul className={s.ratingLoc}>
        <li>
          <svg className={s.iconStar} width="18" height="18" fill="currentColor">
            <use href="/sprite.svg#icon-star" />
          </svg> {`${truck?.rating} (${truck?.reviews?.length ?? 0} Reviews)`}
        </li>
        <li>
          <svg width="18" height="18" fill="currentColor">
            <use href="/sprite.svg#icon-map" />
          </svg> {truck?.location}
        </li>
      </ul>

      <h2 className={s.price}>{truck ? `€ ${truck.price.toFixed(2)}` : ""}</h2>

      <ul className={s.gallery}>
  {truck?.gallery?.map((imgObj, index) => (
    <li key={index} className={s.galleryItem}>
      <img className={s.img} src={imgObj.original} alt={`Truck image ${index + 1}`} />
    </li>
  ))}
</ul>

      <nav className={s.nav}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>

        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>

      <hr className={s.separator} />
      <Outlet />
    </div>
  );
};
