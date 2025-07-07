import React from 'react'
import s from './FilterModal.module.css'
import FilterTrucks from '../FilterTrucks/FilterTrucks'
import Button from '../Button/Button';

const FilterModal: React.FC = () => {
  return (
    <div className={s.modalOverlay}>
      <Button className='close'>X</Button>
      <div className={s.modalContent}>
        <FilterTrucks />
      </div>
    </div>
  )
}

export default FilterModal