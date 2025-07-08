import React from 'react'
import s from './FilterModal.module.css'
import FilterTrucks from '../FilterTrucks/FilterTrucks'
import Button from '../Button/Button';
import { closeModal } from '../../redux/modal/slice';
import { useDispatch } from 'react-redux';

const FilterModal: React.FC = () => {
  
  const dispatch = useDispatch();

  return (
    <div className={s.modalOverlay}>      
      <div className={s.modalContent}>
      <Button className='close' onClick={() => dispatch(closeModal('filters'))}>X</Button>
        <FilterTrucks />
      </div>
    </div>
  )
}

export default FilterModal