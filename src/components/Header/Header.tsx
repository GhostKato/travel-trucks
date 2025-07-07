import { NavLink, useLocation } from "react-router-dom";
import s from './Header.module.css';
import clsx from 'clsx';
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";

type BuildLinkClassParams = {
  isActive: boolean;
};

const buildLinkClass = ({ isActive }: BuildLinkClassParams): string => {
  return clsx(s.link, isActive && s.active);
};

const Header: React.FC = () => {
  const location = useLocation();
  const isCatalog = location.pathname.startsWith('/catalog');  

  return (
    <header className={s.header}>      
      <img src="/logo.svg" alt="logo" className={s.logo} />
      <div className={`${s.container} container`}>
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/catalog">Catalog</NavLink>
        <NavLink className={buildLinkClass} to="/favourites">
          <svg className={s.iconHeart} width="25" height="24" fill="currentColor">
          <use href="/sprite.svg#icon-heart" />
          </svg>
        </NavLink>
      </div>
      {isCatalog &&
        <Button className="filterModal">
          <FaSearch size={30} />
        </Button>}      
    </header>
  );
};

export default Header;
