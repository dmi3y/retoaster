import React, { PropTypes } from 'react'

export default function UniToast ({header, icon, message, toastType, closeToast}) {
  return <div className={`re-toaster__toast re-toaster__toast-${toastType}`}>
    {icon}
    <div className={`re-toaster__toast-base re-toaster__toast-base-${toastType}`}>
      {closeToast}
      {header}
      {message}
    </div>
  </div>
}
UniToast.propTypes = {
  toastType: PropTypes.string.isRequired,
  header: PropTypes.any,
  icon: PropTypes.any,
  message: PropTypes.any.isRequired,
  closeToast: PropTypes.any
}
