import React from 'react'
import { useSelector} from 'react-redux';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectTrucks } from '../../redux/trucks/selectors';
import TrucksList from '../../components/TrucksList/TrucksList';
import { selectFilteredTrucks } from '../../redux/filters/selectors';
import s from './FavouritesPage.module.css'
import { selectFavouriteTrucks } from '../../redux/favourites/selectors';

const FavouritesPage: React.FC = () => {
    const favouriteTrucks = useSelector(selectFavouriteTrucks);
    
  return (
      <div className={s.container}>
          <TrucksList trucks={favouriteTrucks} />
    </div>
  )
}

export default FavouritesPage