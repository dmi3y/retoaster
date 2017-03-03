import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ToastController from './ToastController'

export default class NotificationToaster extends Component {
  render () {
    const Toasts = this.props.toasts.map((toast) => {
      return <ToastController
        toast={toast}
        removeToast={this.props.removeToast}
        key={toast.id}
      />
    })
    return <ReactCSSTransitionGroup
      className='notification-toaster'
      key='notification-toaster'
      transitionName='notification-toaster__animate'
      transitionEnterTimeout={590}
      transitionLeaveTimeout={790}
    >
      {Toasts}
    </ReactCSSTransitionGroup>
  }
}

NotificationToaster.propTypes = {
  toasts: PropTypes.array.isRequired,
  removeToast: PropTypes.func.isRequired
}
