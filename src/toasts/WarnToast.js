import React, { PropTypes } from 'react'
import { Map } from 'immutable'
import BaseToast from './BaseToast'

export default function WarnToast ({$$toast, closeToast}) {
  const toastClassName = 'notification-toaster__toast notification-toaster__toast-warn'

  const header = <h4 className='notification-toaster__toast-warn__header'>
    Warning
  </h4>

  return <div className={toastClassName}>
    <div className='notification-toaster__toast__icon notification-toaster__toast-warn__icon'>⚠</div>
    <BaseToast header={header} text={$$toast.get('text')} closeToast={closeToast} />
  </div>
}
WarnToast.propTypes = {
  $$toast: PropTypes.instanceOf(Map).isRequired,
  closeToast: PropTypes.func.isRequired
}
