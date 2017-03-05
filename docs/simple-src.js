/*
  Retoaster simple example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {fromJS} from 'immutable'
import Retoaster from 'retoaster'

export class SimpleExample extends React.Component {
  constructor () {
    super()

    this.removeToast = this.removeToast.bind(this)
    this.state = {
      toasts: fromJS([
        {
          id: 0,
          message: 'Here we go!',
          type: 'success'
        },
        {
          id: 3,
          message: 'Here you do!',
          type: 'notification'
        },
        {
          id: 1,
          message: 'Here it is!',
          type: 'warn'
        },
        {
          id: 2,
          message: 'Here we ops!',
          type: 'error'
        }
      ])
    }
  }
  removeToast (toast) {
    this.setState({toasts: this.state.toasts.update($$toasts => $$toasts.filter($$toast => $$toast.get('id') !== toast.id))})
  }
  render () {
    return <div>
      <h1>HERE WE ARE</h1>
      <Retoaster toasts={this.state.toasts.toJS()} removeToast={this.removeToast} />
    </div>
  }
}

ReactDOM.render(<SimpleExample />, document.getElementById('root'))
