import React from 'react';
import { useSelector } from 'react-redux';
import s from './TrucksList.module.css';
import TrucksItem from '../TrucksItem/TrucksItem';
import { selectIsLoading } from '../../redux/trucks/selectors';
import type { Truck } from "../../types";

type TrucksListProps = {
  trucks: Truck[];
}

const TrucksList: React.FC<TrucksListProps> = ({ trucks }) => {
  const isLoading = useSelector(selectIsLoading);  

  if (isLoading) {
    return <div className={s.loading}>Loading trucks...</div>;
  }

  if (!Array.isArray(trucks) || trucks.length === 0) {
    return <div className={s.empty}>No trucks found.</div>;
  }

  return (
    <ul className={s.list}>
      {trucks.map((truck) => (
        <TrucksItem key={truck.id} truck={truck} />
      ))}
    </ul>
  );
};

export default TrucksList;
