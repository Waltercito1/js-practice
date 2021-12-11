import React, { Component } from 'react'

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: Date.now() - this.state.timerTime,
      timerTime: this.state.timerTime,
    })
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      })
    }, 10)
  }

  stopTimer = () => {
    this.setState({ timerOn: false })
    clearInterval(this.timer)
  }

  render() {
    const { timerTime } = this.state
    let seconds = '0' + (Math.floor(timerTime / 1000) % 60)
    return (
      <div>
        {seconds}
        {timerTime}
        <div>
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button onClick={this.startTimer}>Start</button>
          )}
          {this.state.timerOn === true && (
            <button onClick={this.stopTimer}>Stop</button>
          )}
        </div>
      </div>
    )
  }
}

export default Stopwatch
