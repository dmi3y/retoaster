import React, { PropTypes } from 'react'
import { Map } from 'immutable'
import BaseToast from './BaseToast'

export default function ErrorToast ({$$toast, closeToast}) {
  const toastClassName = 'notification-toaster__toast notification-toaster__toast-error'
  const header = <h4 className='notification-toaster__toast-error__header'>
    Error
  </h4>

  return <div className={toastClassName}>
    <div className='notification-toaster__toast__icon notification-toaster__toast-error__icon'>×</div>
    <BaseToast header={header} text={$$toast.get('text')} closeToast={closeToast} />
  </div>
}
ErrorToast.propTypes = {
  $$toast: PropTypes.instanceOf(Map).isRequired,
  closeToast: PropTypes.func.isRequired
}
