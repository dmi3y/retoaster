import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ReToast from './ReToast'
import defaultMetaToasts from './metaToasts'

const supplement = (target = {}, donor = {}, origin = {}) => {
  for (const key in donor) {
    if (donor.hasOwnProperty(key)) {
      if (!target.hasOwnProperty(key)) {
        target[key] = donor[key]
      } else if (target.hasOwnProperty(key) && target[key] === true) {
        if (origin.hasOwnProperty(key)) {
          target[key] = origin[key]
        }
      }
    }
  }
  return target
}

export default class ReToaster extends Component {
  componentWillMount () {
    const metaToasts = supplement(this.props.metaToasts, defaultMetaToasts)
    for (const toastKey in metaToasts) {
      if (metaToasts.hasOwnProperty(toastKey)) {
        const targetToast = metaToasts[toastKey]
        const donorToast = defaultMetaToasts[toastKey]
        metaToasts[toastKey] = supplement(targetToast, donorToast)
      }
    }
    this.setState({metaToasts})
  }
  render () {
    const Toasts = this.props.toasts.map((toast) => {
      const metaToast = this.state.metaToasts[toast.type]
      const readyToast = supplement(toast, metaToast, defaultMetaToasts[toast.type])
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
  removeToast: PropTypes.func.isRequired,
  metaToasts: PropTypes.object
}
