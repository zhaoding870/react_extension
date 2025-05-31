import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                <A render={(name) => <B name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = {
        name: '张三',
    }

    render() {
        return (
            <div className='a'>
                <h2>我是A组件</h2>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h2>我是B组件</h2>
                <span>我从A组件接收到的name是：{this.props.name}</span>
            </div>
        )
    }
}
