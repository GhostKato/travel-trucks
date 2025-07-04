import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './HomePage.module.css';
import Button from '../../components/Button/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Campers of your dreams</h1>
      <p className={s.p}>You can find everything you want in our catalog</p>
      <Button className="home" onClick={handleClick}>
        View Now
      </Button> 
    </div>
  );
};

export default HomePage;
