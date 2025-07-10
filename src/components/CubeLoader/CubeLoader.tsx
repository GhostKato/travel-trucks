import React from "react";
import clsx from "clsx";
import s from "./CubeLoader.module.css";

const CubeLoader: React.FC = () => {
  return (
    <div className={s.loader3d}>
      <div className={s.cube}>
        <div className={clsx(s.face, s.front)}></div>
        <div className={clsx(s.face, s.back)}></div>
        <div className={clsx(s.face, s.right)}></div>
        <div className={clsx(s.face, s.left)}></div>
        <div className={clsx(s.face, s.top)}></div>
        <div className={clsx(s.face, s.bottom)}></div>
      </div>
    </div>
  );
};

export default CubeLoader;
