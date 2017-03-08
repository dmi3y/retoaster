import React, { Component, PropTypes } from 'react'
import UniToast from './UniToast'

export default class ReToast extends Component {
  constructor () {
    super()

    this.closeTimeoutId = -1
    this.closeToast = this.closeToast.bind(this)
    this.setLifeSpan = this.setLifeSpan.bind(this)
  }

  componentWillUnmount () {
    clearTimeout(this.closeTimeoutId)
  }

  componentWillMount () {
    this.setLifeSpan()
  }

  closeToast () {
    const toast = this.props.toast
    this.props.removeToast(toast)
  }

  setLifeSpan () {
    const toast = this.props.toast
    if (toast.timeout) {
      this.closeTimeoutId = setTimeout(this.closeToast, toast.timeout)
    }
  }

  render () {
    const toast = this.props.toast
    const CloseToast = toast.closeIcon && <span
      className={`re-toaster__close re-toaster__close-${toast.type}`}
      onClick={this.closeToast}
    >{toast.closeIcon}</span>
    const Icon = toast.icon && <div
      className={`re-toaster__icon re-toaster__icon-${toast.type}`}>
        {toast.icon}
    </div>
    const Header = toast.header && <div
      className={`re-toaster__header re-toaster__header-${toast.type}`}>
        {toast.header}
    </div>

    return <UniToast
      toastType={toast.type}
      header={Header}
      icon={Icon}
      message={toast.message}
      closeToast={CloseToast}
    />
  }
}

ReToast.propTypes = {
  toast: PropTypes.object.isRequired,
  removeToast: PropTypes.func.isRequired
}
