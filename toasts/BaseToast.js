import React, { PropTypes } from 'react'

export default function BaseToast ({header, text, closeToast}) {
  return <div className="notification-toaster__toast-base">
    <a
      href="javascript:void(0)"
      className="notification-toaster__toast-close"
      onClick={closeToast}
    >
      <i className="fa fa-times-circle" aria-hidden="true" />
    </a>
    {header}
    {text}
  </div>
}
BaseToast.propTypes = {
  header: PropTypes.any,
  text: PropTypes.string.isRequired,
  closeToast: PropTypes.func.isRequired
}
