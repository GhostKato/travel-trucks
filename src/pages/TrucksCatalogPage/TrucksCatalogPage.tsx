import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './TrucksCatalogPage.module.css';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { selectFilteredTrucks } from '../../redux/filters/selectors';
import type { RootState } from '../../redux/store';
import { incrementVisibleCount } from '../../redux/pagination/slice';
import Button from '../../components/Button/Button';

const TrucksCatalogPage: React.FC = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const visibleCount = useSelector((state: RootState) => state.pagination.visibleCount);  
  const visibleTrucks = filteredTrucks.slice(0, visibleCount);

  const handleLoadMore = () => {
    dispatch(incrementVisibleCount(6));
  };

  return (
    <div>
      <div className={s.container}>
        <FilterPanel />
        <TrucksList trucks={visibleTrucks} />
  
      </div>
            {visibleCount < filteredTrucks.length && (
              <Button className='loadMore' onClick={handleLoadMore}>
                Load More
              </Button>
            )}
    </div>
  );
};

export default TrucksCatalogPage;
