// TrucksItem.tsx
import React from 'react';
import type { Truck } from '../../types/types';
import s from './TrucksItem.module.css';

interface TrucksItemProps {
  truck: Truck;
}

const TrucksItem: React.FC<TrucksItemProps> = ({ truck }) => {
  return (
    <li className={s.item}>
      <h3>{truck.name}</h3>
      <p>{truck.description}</p>
    </li>
  );
};

export default TrucksItem;
