import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ReToast from './ReToast'
import metaToasts from './metaToasts'

export default class ReToaster extends Component {
  render () {
    const Toasts = this.props.toasts.map((toast) => {
      const metaToast = metaToasts[toast.type] || {}
      const readyToast = Object.assign(toast, metaToast)
      return <ReToast
        toast={readyToast}
        removeToast={this.props.removeToast}
        key={toast.id}
      />
    })
    return <ReactCSSTransitionGroup
      className='re-toaster'
      key='re-toaster'
      transitionName='re-toaster__animate'
      transitionEnterTimeout={590}
      transitionLeaveTimeout={790}
    >
      {Toasts}
    </ReactCSSTransitionGroup>
  }
}

ReToaster.propTypes = {
  toasts: PropTypes.array.isRequired,
  removeToast: PropTypes.func.isRequired
}
