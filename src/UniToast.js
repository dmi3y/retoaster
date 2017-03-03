import React, { PropTypes } from 'react'

export default function WarnToast ({header, icon, message, toastType, closeToast}) {
  return <div className={`notification-toaster__toast notification-toaster__toast-${toastType}`}>
    {icon}
    <div className='notification-toaster__toast-base'>
      {closeToast}
      {header}
      {message}
    </div>
  </div>
}
WarnToast.propTypes = {
  toastType: PropTypes.string.isRequired,
  header: PropTypes.any,
  icon: PropTypes.any,
  message: PropTypes.node.isRequired,
  closeToast: PropTypes.any
}
