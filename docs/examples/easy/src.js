/*
  Retoaster simple example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Retoaster from 'retoaster'

const CustomIcon = ({unicode}) => <div
  style={{
    color: '#fff',
    fontSize: 20,
    textShadow: '0px 0px 20px #fff'
  }}
>
  {unicode}
</div>

const CustomHeader = ({text}) => <div
  style={{
    textTransform: 'capitalize',
    fontWeight: 900
  }}
>
  {text}
</div>

const CustomCloseIcon = () => <span
  style={{
    fontSize: 10
  }}
>⚔</span>

const successToast = {
  id: 1,
  header: <CustomHeader text='We are the Champions!' />,
  message: 'My Friend',
  type: 'success',
  icon: <CustomIcon unicode='♫' />,
  closeIcon: <CustomCloseIcon />,
  timeout: false
}
const noteToast = {
  id: 2,
  header: <CustomHeader text='Call me,' />,
  message: 'When you home.',
  type: 'note',
  icon: <CustomIcon unicode='☎' />,
  closeIcon: false,
  timeout: 5000
}
const warnToast = {
  id: 3,
  header: <CustomHeader text="Baby it's cold" />,
  message: 'Outside',
  type: 'warn',
  icon: <CustomIcon unicode='❄' />,
  closeIcon: <CustomCloseIcon />
}
const errorToast = {
  id: 4,
  header: <CustomHeader text='Red Alert' />,
  message: 'Two to beam up!',
  type: 'error',
  icon: <CustomIcon unicode='★' />,
  closeIcon: <CustomCloseIcon />
}

export class Example extends React.Component {
  constructor () {
    super()

    this.removeToast = this.removeToast.bind(this)
    this.batchToasts = this.batchToasts.bind(this)
    this.proxyBatch = this.proxyBatch.bind(this)
    this.hasToastInState = this.hasToastInState.bind(this)
    this.showToast = this.showToast.bind(this)
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
      <h1>Easy Example</h1>
      <Retoaster
        toasts={this.state.toasts}
        removeToast={this.removeToast}
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
