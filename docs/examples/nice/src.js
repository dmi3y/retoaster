/*
  Retoaster simple example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Retoaster from 'retoaster'

const successToast = {
  id: 1,
  message: 'Customized success',
  type: 'success'
}
const noteToast = {
  id: 2,
  message: 'Customized note',
  type: 'note'
}
const warnToast = {
  id: 3,
  message: 'Default warning',
  type: 'warn'
}
const errorToast = {
  id: 4,
  message: 'Default error',
  type: 'error'
}

const metaToasts = {
  success: {
    header: 'Good Job',
    icon: <svg style={{width: 24, height: 24}} viewBox='0 0 24 24'>
      <path fill='#ffffff' d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' />
    </svg>,
    timeout: false
  },
  note: {
    header: 'Real Fact',
    icon: <svg style={{width: 24, height: 24}} viewBox='0 0 24 24'>
      <path fill='#ffffff' d='M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z' />
    </svg>
  }
}

export class Example extends React.Component {
  constructor () {
    super()

    this.removeToast = this.removeToast.bind(this)
    this.batchToasts = this.batchToasts.bind(this)
    this.proxyBatch = this.proxyBatch.bind(this)
    this.showToast = this.showToast.bind(this)
    this.hasToastInState = this.hasToastInState.bind(this)
    this.state = {
      toasts: [
      ]
    }
  }
  componentDidMount () {
    this.batchToasts()
  }
  batchToasts (batch = [
    successToast,
    noteToast,
    warnToast,
    errorToast
  ]) {
    const setState = this.setState.bind(this)
    const batchToasts = this.batchToasts
    const stateBatch = this.state.toasts
    if (batch.length) {
      setTimeout(() => {
        const toast = batch.pop()
        const toasts = [toast].concat(stateBatch)
        setState({
          toasts
        })
        batchToasts(batch)
      }, 100)
    }
  }
  proxyBatch () {
    this.batchToasts()
  }
  showToast (e) {
    const type = e.target.dataset.type
    let toast
    switch (type) {
      case 'success':
        toast = successToast
        break
      case 'note':
        toast = noteToast
        break
      case 'warn':
        toast = warnToast
        break
      case 'error':
        toast = errorToast
        break
      default:
        toast = successToast
        break
    }

    this.setState({
      toasts: [toast].concat(this.state.toasts)
    })
  }
  hasToastInState (type) {
    return this.state.toasts.some(toast => toast.type === type)
  }
  removeToast (toast) {
    const toasts = this.state.toasts.filter(itoast => itoast !== toast)
    this.setState({toasts})
  }
  render () {
    return <div>
      <h1>Nice Example</h1>
      <Retoaster
        toasts={this.state.toasts}
        removeToast={this.removeToast}
        metaToasts={metaToasts}
      />
      <h4>Show me...</h4>
      {!this.hasToastInState('success') && <button data-type='success' onClick={this.showToast}>Success Toast</button>}
      {!this.hasToastInState('note') && <button data-type='note' onClick={this.showToast}>Note Toast</button>}
      {!this.hasToastInState('warn') && <button data-type='warn' onClick={this.showToast}>Warn Toast</button>}
      {!this.hasToastInState('error') && <button data-type='error' onClick={this.showToast}>Error Toast</button>}
    </div>
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
