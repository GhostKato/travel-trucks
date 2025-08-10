import React from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import s from './NoTrucksFound.module.css'

const NoTrucksFound = () => {

    const location = useLocation();

  return (
      <div className={s.container}>
          <div className={clsx(
          s.content,
          location.pathname === '/favourites' && s.favContent
        )}>
            <p className={s.p}>No trucks found.</p>
          </div>
      </div>
  )
}

export default NoTrucksFound