import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectTrucks } from '../../redux/trucks/selectors';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './TrucksCatalogPage.module.css'
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { selectFilteredTrucks } from '../../redux/filters/selectors';

const TrucksCatalogPage: React.FC = () => {
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const dispatch: AppDispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <FilterPanel/>
      <TrucksList filteredTrucks={filteredTrucks} />
    </div>
  );
};

export default TrucksCatalogPage;
