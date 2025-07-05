import React from 'react';
import type { Truck } from '../../types/types';
import { equipmentConfig} from '../../config/equipmentCofig';
import s from './EquipmentItem.module.css';

interface EquipmentItemProps {
  truck: Truck;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ truck }) => {
  return (
    <>
      {Object.entries(equipmentConfig).map(([key, { icon, label, type }]) => {
       
        const value = (truck as any)[key];

        if (type === 'boolean') {
          if (!value) return null;
          return (
            <li key={key} className={s.item}>
              <svg width="16" height="16" fill="currentColor">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
              {label}
            </li>
          );
        }

        if (type === 'string') {
          if (!value || value === '') return null;
          return (
            <li key={key} className={s.item}>
              <svg width="16" height="16" fill="currentColor">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
              {value}
            </li>
          );
        }

        return null;
      })}
    </>
  );
};

export default EquipmentItem;
