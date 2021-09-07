import React from 'react'
import Notification from '../Icons/Notification'
import './style.css'

export default function NotificationComponent () {
  const closePopup = () => {
    console.log('xd')
  }

  return (
    <div className="notif__card">
      <div className="notif__header">
        <Notification fill="#c13516" />
        <span className="notif__header__title">Información</span>
        <button className="notif__header__close" onClick={closePopup}>&times;</button>
      </div>
      <div className="notif__content">
        <h4 className="notif__content__title">Para ingresar el número</h4>
        <span className="notif__content__description">
          Introduce el número con el código de área sin el <strong>+</strong><br />
          Datos extraídos con <a href="https://veriphone.io/">Veriphone.io</a>
        </span>
      </div>
    </div>
  )
}
