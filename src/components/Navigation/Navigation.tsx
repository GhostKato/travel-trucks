import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import clsx from 'clsx';

type BuildLinkClassParams = {
  isActive: boolean;
};

const buildLinkClass = ({ isActive }: BuildLinkClassParams): string => {
  return clsx(s.link, isActive && s.active);
};

const Navigation: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} container`}>
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/catalog">Catalog</NavLink>
      </div>
    </header>
  );
};

export default Navigation;
