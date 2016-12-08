import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'

import SuccessToast from './toasts/SuccessToast'
import WarnToast from './toasts/WarnToast'
import ErrorToast from './toasts/ErrorToast'

export default class ToastController extends Component {
  static propTypes = {
    $$toast: PropTypes.instanceOf(Map).isRequired,
    removeToast: PropTypes.func.isRequired
  }

  closeTimeoutId = -1

  componentWillUnmount () {
    clearTimeout(this.closeTimeoutId)
  }

  componentWillMount () {
    this.setLifeSpan()
  }

  closeToast = () => {
    const $$toast = this.props.$$toast
    this.props.removeToast($$toast)
  }

  setLifeSpan = () => {
    const $$toast = this.props.$$toast
    const toastLifeSpan = $$toast.get('toastLifeSpan')
    if (toastLifeSpan) {
      this.closeTimeoutId = setTimeout(this.closeToast, toastLifeSpan)
    }
  }

  render () {
    const $$toast = this.props.$$toast
    const toastType = $$toast.get('toastType')

    let Toast = SuccessToast

    switch (toastType) {
      case 'success':
        Toast = SuccessToast
        break
      case 'warn':
        Toast = WarnToast
        break
      case 'error':
        Toast = ErrorToast
        break
    }

    return <Toast $$toast={$$toast} closeToast={this.closeToast} />
  }
}
