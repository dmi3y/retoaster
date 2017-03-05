import React, { Component, PropTypes } from 'react'
import UniToast from './UniToast'

export default class ToastController extends Component {
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
    if (toast.lifeSpan) {
      this.closeTimeoutId = setTimeout(this.closeToast, toast.lifeSpan)
    }
  }

  render () {
    const toast = this.props.toast
    const CloseToast = toast.CloseIcon && <span
      className={`re-toaster__close re-toaster__close__${toast.type}`}
      onClick={this.closeToast}
    >{toast.CloseIcon}</span>
    const Icon = toast.Icon && <div
      className={`re-toaster__icon re-toaster__icon__${toast.type}`}>
        {toast.Icon}
    </div>
    const Header = toast.header && <div
      className={`re-toaster__header re-toaster__header__${toast.type}`}>
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

ToastController.propTypes = {
  toast: PropTypes.object.isRequired,
  removeToast: PropTypes.func.isRequired
}
