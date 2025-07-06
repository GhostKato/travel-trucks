import React from 'react'
import type { Truck } from '../../types';
import { useSelector } from 'react-redux';
import s from './EquipmentList.module.css'
import EquipmentItem from '../EquipmentItem/EquipmentItem'
import { selectIsLoading } from '../../redux/trucks/selectors';

type EquipmentListProps = {
  truck?: Truck | null;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ truck }) => {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <div className={s.loading}>Loading Equipments...</div>;
  }

  if (!truck) {
    return <div className={s.loading}>No truck selected</div>;
  }

  return (
    <ul className={s.list}>
      <EquipmentItem truck={truck} />
    </ul>
  );
};

export default EquipmentList;
