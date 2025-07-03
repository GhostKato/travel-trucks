import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import clsx from 'clsx';
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";

type BuildLinkClassParams = {
  isActive: boolean;
};

const buildLinkClass = ({ isActive }: BuildLinkClassParams): string => {
  return clsx(s.link, isActive && s.active);
};

const Navigation: React.FC = () => {
  return (
    <header className={s.header}>
      <img src="/logo.svg" alt="logo" className={s.logo} />
      <div className={`${s.container} container`}>
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/catalog">Catalog</NavLink>
      </div>
      <Button className="search">
        <FaSearch size={30}/>
      </Button>      
    </header>
  );
};

export default Navigation;
