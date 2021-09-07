import React, { useState } from 'react'
import NotificationComponent from '../Notification'
import Notification from '../Icons/Notification'
import './style.css'

export default function NotifIcon () {
  const [isNotifHidden, setIsNotifHidden] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const handleClose = () => {
    setIsNotifHidden(true)
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <>
      {
        !isNotifHidden &&
        <button className="notif-icon" onClick={handleClose}>
          <Notification fill="#c13516" />
        </button>}
      {
        isPopupOpen &&
        <NotificationComponent handleClose={handleClose} />
      }
    </>
  )
}
