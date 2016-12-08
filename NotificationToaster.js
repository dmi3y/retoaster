import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ToastController from './ToastController'
import './notificationToaster.scss'
import './notificationToasterAnimate.scss'

export default class NotificationToaster extends Component {
  static propTypes = {
    $$toasts: PropTypes.instanceOf(List).isRequired,
    removeToast: PropTypes.func.isRequired
  }

  removeToast = ($$toast) => {
    const toastIdToRemove = $$toast.get('toastId')
    this.props.removeToast(toastIdToRemove)
  }

  render () {
    const Toasts = this.props.$$toasts.map(($$toast) => {
      const toastId = $$toast.get('toastId')
      return <ToastController
        $$toast={$$toast}
        removeToast={this.removeToast}
        key={toastId}
      />
    })
    return <ReactCSSTransitionGroup
      className="notification-toaster"
      key="notification-toaster"
      transitionName="notification-toaster__animate"
      transitionEnterTimeout={590}
      transitionLeaveTimeout={790}
    >
      {Toasts}
    </ReactCSSTransitionGroup>
  }
}
