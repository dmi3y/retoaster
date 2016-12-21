import React, { PropTypes } from 'react'
import { Map } from 'immutable'
import BaseToast from './BaseToast'

export default function SuccessToast ({$$toast, closeToast}) {
  const toastClassName = 'notification-toaster__toast notification-toaster__toast-notification'

  const header = <h4 className='notification-toaster__toast-notification__header'>
    Notification
  </h4>

  return <div className={toastClassName}>
    <div className='notification-toaster__toast__icon notification-toaster__toast-notification__icon'>☁</div>
    <BaseToast header={header} text={$$toast.get('text')} closeToast={closeToast} />
  </div>
}
SuccessToast.propTypes = {
  $$toast: PropTypes.instanceOf(Map).isRequired,
  closeToast: PropTypes.func.isRequired
}
