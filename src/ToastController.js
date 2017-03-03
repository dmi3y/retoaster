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
    const check = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
      <path fill="#000000" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
    </svg>
    const close = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
      <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>

    const toast = this.props.toast
    const toastType = toast.type
    const Icon = <div className={`notification-toaster__toast__icon notification-toaster__toast-${toastType}__icon`}>
      {check}
    </div>
    const CloseToast = <span
      className='notification-toaster__toast-close'
      onClick={this.closeToast}
    >{close}</span>

    return <UniToast
      toastType={toastType}
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
