import React, { Component } from 'react'

class Counter extends Component {
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

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    })
  }

  render() {
    const { timerTime } = this.state
    let seconds = '0' + (Math.floor(timerTime / 1000) % 60)
    return (
      <div>
        <div>{seconds}</div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop!</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    )
  }
}

export default Counter
