import React, { PureComponent } from 'react';

import './index.css';

export default class Parent extends PureComponent {
    state = {
        carName: '奔驰',
    }

  render() {
    console.log('Parent组件重新渲染了');
    const { carName } = this.state;
    return (
      <div className='parent'>
        <h2>我是parent组件</h2>
        <span>我的车名字是 ： {carName}</span>
        <br/>
        <button onClick={() => { this.setState({ carName: '奥迪' }) }}>点我换车</button>
        <Child />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child组件重新渲染了');
    return (
      <div className='child'>
        <h2>我是Child组件</h2>
      </div>
    )
  }
}
