import React from 'react'
import NotificationComponent from '../Notification'
import Notification from '../Icons/Notification'
import './style.css'

export default function NotifIcon () {
  const handleClick = () => {
    console.log('x')
  }

  return (
    <>
      <button className="notif-icon" onClick={handleClick}>
        <Notification fill="#c13516" />
      </button>
      <NotificationComponent />
    </>
  )
}
