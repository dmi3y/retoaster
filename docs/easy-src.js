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

export class EasyExample extends React.Component {
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
      <h1>Easy Example</h1>
      <Retoaster
        toasts={this.state.toasts}
        removeToast={this.removeToast}
      />
      {hasNoToasts && <button onClick={this.proxyBatch}>Batch again</button>}
    </div>
  }
}

ReactDOM.render(<EasyExample />, document.getElementById('root'))
