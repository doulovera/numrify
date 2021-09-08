import React from 'react'
import Notification from '../Icons/Notification'
import './style.css'

export default function NotificationComponent ({ handleClose }) {
  return (
    <div className="notif__card">
      <div className="notif__header">
        <Notification fill="#c13516" />
        <span className="notif__header__title">Information</span>
        <button className="notif__header__close" onClick={handleClose}>&times;</button>
      </div>
      <div className="notif__content">
        <h4 className="notif__content__title">Entering a phone number</h4>
        <span className="notif__content__description">
          Put the phone number with the area code without the <strong>+</strong><br />
          Data extracted from <a href="https://veriphone.io/">Veriphone.io</a>
        </span>
      </div>
    </div>
  )
}
