import React from 'react'
import style from './css/style.module.css'
export default function BotaoPrincipal({children, classe}) {
  return (
    <button className={`${style.botaoPrincipal} ${style[classe]}`}>{children}</button>
  )
}
