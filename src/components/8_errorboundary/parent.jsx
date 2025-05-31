import React, { Component } from 'react';

import Child from './child';

export default class Parent extends Component {

    static getDerivedStateFromError(error) {
        // 当子组件发生错误时触发
        console.log('Parent组件捕获到错误：', error);
        // 可以在这里更新状态，显示备用UI
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // 当子组件发生错误时触发
        console.log('Parent组件捕获到错误信息：', error, info);
        // 可以在这里记录错误日志
    }
    state = {
        hasError: false
    }
    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2 style={{ color: 'red' }}>发生错误，无法显示Child组件</h2> : <Child />}
            </div>
        )
    }
}
