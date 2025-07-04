import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectError, selectIsLoading } from '../../redux/trucks/selectors';
import TrucksList from '../../components/TrucksList/TrucksList';

const TrucksCatalogPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);  

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div>
       <TrucksList/>
    </div>
  );
};

export default TrucksCatalogPage;
