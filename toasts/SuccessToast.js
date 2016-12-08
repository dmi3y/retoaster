import React, { PropTypes } from 'react'
import { Map } from 'immutable'
import BaseToast from './BaseToast'

export default function SuccessToast ({$$toast, closeToast}) {
  const toastClassName = 'notification-toaster__toast notification-toaster__toast-success'

  const header = <h4 className="notification-toaster__toast-success__header">
    Success
  </h4>

  const icon = <div className="notification-toaster__toast__icon notification-toaster__toast-success__icon">
    <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true" />
  </div>

  return <div className={toastClassName}>
    {icon}
    <BaseToast header={header} text={$$toast.get('text')} closeToast={closeToast} />
  </div>
}
SuccessToast.propTypes = {
  $$toast: PropTypes.instanceOf(Map).isRequired,
  closeToast: PropTypes.func.isRequired
}
