import React, { PropTypes } from 'react'

export default function WarnToast ({header, icon, message, toastType, closeToast}) {
  return <div className={`re-toaster__toast re-toaster__toast__${toastType}`}>
    {icon}
    <div className='re-toaster__toast__base'>
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
