import React from 'react';
import { useSelector } from 'react-redux';
import s from './TrucksList.module.css';
import TrucksItem from '../TrucksItem/TrucksItem';
import { selectTrucks, selectIsLoading } from '../../redux/trucks/selectors';

const TrucksList: React.FC = () => {
  const trucks = useSelector(selectTrucks);
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
