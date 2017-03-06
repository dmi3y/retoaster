/*
  Retoaster simple example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Retoaster from 'retoaster'

import './index.css'

const successToast = {
  id: 1,
  message: 'Here we go!',
  type: 'success'
}
const noteToast = {
  id: 2,
  message: 'Here you do!',
  type: 'notification'
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
    this.state = {
      toasts: [
        successToast,
        noteToast,
        warnToast,
        errorToast
      ]
    }
  }
  removeToast (toast) {
    const toasts = this.state.toasts.filter(itoast => itoast !== toast)
    this.setState({toasts})
  }
  render () {
    return <div>
      <h1>Simple Example</h1>
      <Retoaster
        toasts={this.state.toasts}
        removeToast={this.removeToast}
      />
    </div>
  }
}

ReactDOM.render(<SimpleExample />, document.getElementById('root'))
