import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectTrucks } from '../../redux/trucks/selectors';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './TrucksCatalogPage.module.css'

const TrucksCatalogPage: React.FC = () => {
  const trucks = useSelector(selectTrucks);
  const dispatch: AppDispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <TrucksList trucks={trucks} />
    </div>
  );
};

export default TrucksCatalogPage;
