import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Truck } from '../../types';
import s from './TrucksItem.module.css';
import EquipmentList from '../EquipmentList/EquipmentList';
import Button from '../Button/Button';
import RatingLocation from '../RatingLocation/RatingLocation';

type TrucksItemProps = {
  truck: Truck;
}

const TrucksItem: React.FC<TrucksItemProps> = ({ truck }) => {   

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${truck.id}`);
  };  

  return (
    <li className={s.item}>
      <div className={s.imgContainer}>
      <img className={s.img} src={truck.gallery[0].thumb} alt={`Кемпер ${truck.name}`}/>
      </div>
     <div className={s.con}>
        <div className={s.namePrice}>
          <h3>{truck.name}</h3>
          <div className={s.priceCont}>
            <h3>{`€ ${truck.price.toFixed(2)}`} </h3>
            <svg className={s.iconHeart} width="25" height="24" fill="currentColor">
          <use href="/sprite.svg#icon-heart" />
                  </svg>
          </div>
        </div>       
        <div className={s.descriptionCont}>
          
          {truck && <RatingLocation truck={truck} />}
          
          <p className={s.description}>{truck.description}</p>
          <EquipmentList truck={truck} />
          <Button className="show" onClick={handleClick}>
        Show more
      </Button> 
          
         </div>
     </div>
    </li>
  );
};

export default TrucksItem;
