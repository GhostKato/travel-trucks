import React from 'react'
import type { Truck } from '../../types/types';
import { useSelector } from 'react-redux';
import s from './EquipmentList.module.css'
import EquipmentItem from '../EquipmentItem/EquipmentItem'
import { selectIsLoading } from '../../redux/trucks/selectors';

interface TrucksItemProps {
  truck: Truck;
}

const EquipmentList: React.FC<TrucksItemProps> = ({ truck }) => {
    
    const isLoading = useSelector(selectIsLoading);
    
    if (isLoading) {
        return <div className={s.loading}>Loading Equipments...</div>;
      }        
    
  return (
    <ul className={s.list}>      
          <EquipmentItem truck={truck}/>        
        </ul>
      );
    };

export default EquipmentList