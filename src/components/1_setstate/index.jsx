import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }

  increment = () => {
    // this.state.count += 1 // 不推荐
    // this.setState({ count: this.state.count + 1 }) // 推荐
    // this.setState((state) => ({ count: state.count + 1 }), () => {
    //   console.log('increment callback', this.state.count) // 异步
    // });
    // console.log('increment', this.state.count) // 异步
    // setState 是异步的，可能会导致获取到的 state 不是最新的值

    this.setState((state) => {
      console.log('increment', state.count) // 异步
      return { count: state.count + 1 }
    }
    , () => {
      console.log('increment callback', this.state.count) // 异步
    });
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
