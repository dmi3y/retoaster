/*
  Retoaster simple example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Retoaster from 'retoaster'

const successToast = {
  id: 1,
  message: 'Here we go!',
  type: 'success'
}
const noteToast = {
  id: 2,
  message: 'Here you do!',
  type: 'note'
}
const warnToast = {
  id: 3,
  message: 'Here it is!',
  type: 'warn'
}
const errorToast = {
  id: 4,
  message: 'Heres opsss!',
  type: 'error'
}

export class SimpleExample extends React.Component {
  constructor () {
    super()

    this.removeToast = this.removeToast.bind(this)
    this.batchToasts = this.batchToasts.bind(this)
    this.proxyBatch = this.proxyBatch.bind(this)
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
  removeToast (toast) {
    const toasts = this.state.toasts.filter(itoast => itoast !== toast)
    this.setState({toasts})
  }
  render () {
    const hasNoToasts = this.state.toasts && !this.state.toasts.length
    return <div>
      <h1>Simple Example</h1>
      <Retoaster
        toasts={this.state.toasts}
        removeToast={this.removeToast}
      />
      {hasNoToasts && <button onClick={this.proxyBatch}>Batch again</button>}
    </div>
  }
}

ReactDOM.render(<SimpleExample />, document.getElementById('root'))
