import React, { PropTypes } from 'react'

export default function BaseToast ({header, text, closeToast}) {
  return <div className='notification-toaster__toast-base'>
    <span
      className='notification-toaster__toast-close'
      onClick={closeToast}
    >⊗</span>
    {header}
    {text}
  </div>
}
BaseToast.propTypes = {
  header: PropTypes.any,
  text: PropTypes.string.isRequired,
  closeToast: PropTypes.func.isRequired
}
