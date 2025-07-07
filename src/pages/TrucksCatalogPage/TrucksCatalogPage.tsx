import React from 'react';
import { useSelector} from 'react-redux';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './TrucksCatalogPage.module.css'
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { selectFilteredTrucks } from '../../redux/filters/selectors';

const TrucksCatalogPage: React.FC = () => {
  const filteredTrucks = useSelector(selectFilteredTrucks);    

  return (
    <div className={s.container}>
      <FilterPanel/>
      <TrucksList trucks={filteredTrucks} />
    </div>
  );
};

export default TrucksCatalogPage;
